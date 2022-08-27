import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const signupPageStyle = {
  container,
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  bigText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "64px",
    lineHeight: "77px",
    color: "#FFFFFF",
  },
  whiteButton: {
    background: "white",
    padding: "1.125rem 3.5rem",
    fontSize: "1.5rem",
    lineHeight: "1.7",
    borderRadius: "48px",
    fontWeight: "bold",
    color: infoColor,
    textAlign: "center",
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "center"
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
  forgetPassword: {
    color: "#174293 !important",
    lineHeight: "41px",
    fontSize: "20px",
    fontWeight: "450",
    "&:hover": {
      color: "#000 !important",
      textDecoration: "underline"
    }
  },
  signup: {
    color: infoColor,
    lineHeight: "41px",
    fontSize: "20px",
    fontWeight: "bold",
    "&:hover": {
      color: "#000 !important",
      textDecoration: "underline"
    }
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
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  signContainer: {
    fontSize: "28px",
    textAlign: "right",
    lineHeight: "35px",
    letterSpacing: "-0.045em",
    fontWeight: 500,
    background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%) !important",
    borderRadius: "0px 0px 25% 0px"
  },
};

export default signupPageStyle;
