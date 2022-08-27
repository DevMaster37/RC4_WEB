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
        padding: "60px 80px",
        width: "100%"
    },
    featureSubItem: {
        margin: "20px 0",
        width: "240px",
        height: "240px",
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
        fontSize: "20px"
    },

    utilitiesContainer: {
        display: "flex",
        padding: "50px",
        flexDirection: "column",
        alignItems: "center"
    },
    utilitiesBox: {
        marginTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    utilitiesItem: {
        width: "100%",
        padding: "20px",
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#00C2FF",
    },
    utilitiesHeader: {
        textAlign: "center",
        fontSize: "40px",
        background: "linear-gradient(270deg, #D69B04 0%, #E5A709 9.58%, #FDCD53 52.67%, #E5A605 84.37%, #E1A407 97.71%)",
        lineHeight: "48px",
        fontWeight: 700,
        width: "fit-content"
    },
    utilitiesLabel: {
        marginTop: "20px",
        lineHeight: "24px",
        color: "white",
        fontSize: "20px",
        fontWeight: 400,
        textAlign: "center"
    },
    securityContainer: {
        padding: "50px",
        display: "flex",
        alignItems: "space-around"
    },
    securityImg: {
        margin: "0 40px"
    },
    securityBox: {
        flex: 1,
    },
    securityHeader: {
        fontSize: "32px",
        textAlign: "left",
        fontWeight: "bold",
        color: "black",
        lineHeight: "36px"
    },
    securityDesc: {
        fontSize: "20px",
        fontWeight: "400",
        color: "black",
        marginTop: "15px",
        lineHeight: "24px"
    },
    securityList: {
        display: "flex",
    },
    securityItem: {
        backgroundColor: "#D9D9D9",
        position: "relative",
        borderRadius: "40px",
        padding: "20px 35px 50px 35px",
        height: "fit-content",
        marginRight: "30px"
    },
    securityLabel: {
        fontSize: "16px",
        fontWeight: 700,
        textAlign: "center",
        lineHeight: "20px",
    },
    securitySubLabel: {
        fontSize: "14px",
        fontWeight: 400,
        textAlign: "center",
        lineHeight: "16px"
    },
    securityImgContainer: {
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        left: 0,
    },

    issueBox: {
        position: "relative",
        width: "100%",
        marginTop: "20px",
        minHeight: "400px",
        background: "linear-gradient(135deg, #3C8CE7 0%, #000000 100%)",
        padding: "60px",
    },
    issueSubLabel: {
        color: "white",
        fontWeight: "400",
        fontSize: "20px",
        letterSpacing: "1px",
        lineHeight: "normal"
    },
    issueLabel: {
        color: "white",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "normal",
        letterSpacing: "2px",
        marginTop: "20px",
    },
    issueImg: {
        position: "absolute",
        right: "15px",
        top: "30px",
        height: "400px",
    },

    downloadContainer: {
        marginTop: "50px",
        padding: "0 150px",
        marginBottom: "50px",
    },
    downloadBox: {
        position: "relative",
        width: "100%",
        minHeight: "450px",
        padding: "60px",
    },
    downloadLabel: {
        color: "black",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "normal",
        letterSpacing: "2px",
        marginTop: "20px",
        marginBottom: "15px"
    },
    downloadImg: {
        top: "10px",
        right: "15px",
        height: "450px",
        position: "absolute",
        width: "240px",
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
});

export default indexPageStyle;
