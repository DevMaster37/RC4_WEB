import { container, infoColor } from "/styles/jss/nextjs-material-kit.js";

const helpPageStyle = {
  container,
  helpContainer: {
    position: "relative",
    padding: "64px"
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
  whiteButton: {
    background: "white",
    fontSize: "1.5rem",
    lineHeight: "1.7",
    borderRadius: "48px",
    fontWeight: "bold",
    color: infoColor,
    textAlign: "center",
    whiteSpace: "nowrap",
    display: "flex",
    justifyContent: "end"
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
    height: "250px",
    top: "0px",
    background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%) !important",
    zIndex: "-1"
  },
};

export default helpPageStyle;
