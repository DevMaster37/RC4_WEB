import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const loginPageStyle = {
  container,
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
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
    paddingTop: "0rem",
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
    borderRadius: "0px 0px 0px 25%"
  },
};

export default loginPageStyle;
