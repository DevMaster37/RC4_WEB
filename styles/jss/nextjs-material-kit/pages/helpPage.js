import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const helpPageStyle = {
  container,
  helpContainer: {
    position: "relative",
    padding: "64px 0px 0px 0px",
    minWidth: "200px",
  },
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
  centerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  svgIcon: {
    width: "48px !important",
    height: "48px !important",
  },
  hr: {
    width: "100%",
    height: "1px",
    borderColor: "transparent",
    backgroundColor: infoColor,
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
  searchContainer: {
    margin: "0px 64px 48px 64px",
    paddingLeft: "48px",
    paddingRight: "3px",
    background: "white",
    minWidth: "200px",
    fontSize: "1.5rem",
    lineHeight: "1.7",
    borderRadius: "48px",
    fontWeight: "bold",
    color: infoColor,
    textAlign: "center",
    whiteSpace: "nowrap",
    display: "flex",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  blueRect: {
    position: "absolute",
    width: "100%",
    height: "360px",
    top: "0px",
    background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%) !important",
    zIndex: "-1"
  },
  whiteRect: {
    padding: "64px",
    background: "white",
    boxShadow: "9px 10px 36px -4px rgba(140, 140, 140, 0.25)"
  },
  whiteShadowBox: {
    width: "100%",
    height: "100%",
    margin: "0px 16px 0px 16px",
    boxShadow: "9px 10px 36px -4px rgba(140, 140, 140, 0.25)"
  },
  colorPrimary: {
    fontWeight: "400",
    color: "#174091",
    flex: "1"
  },
  complexBtn: {
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "black",
    width: "fit-content",
    color: "white",
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "15px"
  },
  complexBtnLabelBox: {
    display: "block"
  },
  complexBtnImg: {
    width: "45px",
    height: "45px",
    marginRight: "10px"
  },
  complexBtnLabel: {
    fontSize: "24px",
    fontWeight: 700
  }
};

export default helpPageStyle;
