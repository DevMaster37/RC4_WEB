import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const featurePage = {
  container,
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  form: {
    margin: "30px",
  },
  transparentCard: {
    background: "transparent !important",
    boxShadow: "none"
  },
  blueCard: {
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: "3px solid #00C2FF",
    boxShadow: "7px 7px 8px #D9D9DB",
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
  featureIcon: {
    width: "20%"
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
  featureSubItem: {
    width: "80%",
    height: "240px",
    margin: "auto",
    background: "white",
    boxShadow: "4px 4px 7px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  featureSubLabel: {
    marginTop: "10px",
    color: "black",
    fontWeight: 500,
    fontSize: "24px",
    paddingTop: "12px"
  },
  centerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  vertialCenterContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  downloadContainer: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  complexBtn: {
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "black",
    width: "fit-content",
    color: "white",
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "24px",
    cursor: "pointer"
  },
  complexBtnLabelBox: {
    display: "block"
  },
  complexBtnImg: {
    width: "84px",
    height: "84px",
    marginRight: "12px"
  },
  complexBtnLabel: {
    fontSize: "48px",
    fontWeight: 700
  }
};

export default featurePage;
