import { messages, type Locale, type Messages } from "~/locales/messages";

const STORAGE_KEY = "portfolio-locale";

export function useLocale() {
  const locale = useState<Locale>("locale", () => "en");
  const ready = useState("locale-ready", () => false);

  const t = computed<Messages>(() => messages[locale.value]);
  const isFa = computed(() => locale.value === "fa");
  const dir = computed(() => (isFa.value ? "rtl" : "ltr"));

  const applyDocumentLocale = (value: Locale) => {
    if (!import.meta.client) return;
    const html = document.documentElement;
    html.lang = value === "fa" ? "fa" : "en";
    html.dir = value === "fa" ? "rtl" : "ltr";
    html.classList.toggle("font-fa", value === "fa");
  };

  const setLocale = (value: Locale) => {
    locale.value = value;
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, value);
      applyDocumentLocale(value);
    }
  };

  const toggleLocale = () => {
    setLocale(locale.value === "en" ? "fa" : "en");
  };

  const initLocale = () => {
    if (!import.meta.client || ready.value) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    const next: Locale = stored === "fa" || stored === "en" ? stored : "en";
    locale.value = next;
    applyDocumentLocale(next);
    ready.value = true;
  };

  return {
    locale,
    t,
    isFa,
    dir,
    setLocale,
    toggleLocale,
    initLocale,
  };
}
