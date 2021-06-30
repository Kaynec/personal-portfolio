import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  h1: {
    fontSize: "3rem",
  },
  IconButton: {
    color: "black",
  },

  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: ".5s",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
});

export default useStyles;
