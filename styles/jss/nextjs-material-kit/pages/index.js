import {
    container,
    title,
    grayColor
} from "/styles/jss/nextjs-material-kit.js";

const indexPageStyle = (theme) => ({
    // custom styles
    container,
    headerContainer: {
        padding: "30px 50px",
    },
    headerBox: {
        position: "relative",
        width: "100%",
        minHeight: "360px",
        background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
        borderRadius: "0px 0px 200px 0px",
        paddingTop: "60px",
        paddingLeft: "40px"
    },
    headerSubLabel: {
        color: "white",
        fontWeight: "700",
        fontSize: "30px",
        letterSpacing: "1px",
        lineHeight: "normal"
    },
    headerLabel: {
        color: "white",
        fontSize: "48px",
        fontWeight: "700",
        lineHeight: "normal",
        letterSpacing: "2px",
        marginTop: "20px",
        fontStyle: "italic",
    },
    headerDesc: {
        color: "white",
        fontSize: "48px",
        fontWeight: "700",
        lineHeight: "normal",
        letterSpacing: "2px",
        marginTop: "20px",
    },
    headerImg: {
        position: "absolute",
        right: "10px",
        top: "30px",
        height: "320px",
    },
    headerSubBox: {
        position: "relative",
        width: "100%",
        padding: "30px 0",
        display: "flex",
        justifyContent: "space-between"
    },
    headerGradientLabel: {
        fontSize: "28px",
        textAlign: "right",
        lineHeight: "35px",
        letterSpacing: "-0.045em",
        fontWeight: 500,
        background: "linear-gradient(135deg, #52E5E7 0%, #130CB7 100%)",
    },

    featuresContainer: {
        background: "linear-gradient(135deg, #C2FFD8 8.54%, #465EFB 100%)",
        width: "100%",
        borderRadius: "140px 0px 0px 0px",
        minHeight: "420px",
        padding: "20px 60px"
    },
    featureTitle: {
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: "1px",
        lineHeight: "60px"
    },
    featuresBox: {
        display: "flex",
        marginTop: "30px",
        justifyContent: "space-around",
        width: "100%"
    },
    featuresItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    featureImg: {
        width: "100px",
        height: "100px",
    },
    featureLabel: {
        marginTop: "20px",
        fontSize: "22px",
        textAlign: "center",
        lineHeight: "30px",
        color: "white",
        fontWeight: 400,
    },
    featureSubBox: {

    },
    featureSubItem: {

    },
    featureSubImg: {

    },
    featureSubLabel: {

    },
});

export default indexPageStyle;
