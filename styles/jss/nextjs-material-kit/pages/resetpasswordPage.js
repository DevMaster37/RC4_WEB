import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const resetPasswordPageStyle = {
  container,
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  form: {
    margin: "0",
  },
  transparentCard: {
    background: "transparent !important",
    boxShadow: "none"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    padding: "20px 0",
    marginTop: "20px",
    marginBottom: "15px"
  },
  avatar: {
    width: "25%"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "36px",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  inputIconsColor: {
    color: "#495057"
  },
};

export default resetPasswordPageStyle;
