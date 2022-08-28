import {
    container,
    title,
    grayColor
} from "/styles/jss/nextjs-material-kit.js";

const indexPageStyle = (theme) => ({
    // custom styles
    container,
    topBlueBar: {
        background: "#00C2FF",
        width: "100%",
        height: "70px",
    },
    sidebarContainer: {
        background: "white",
        boxShadow: "6px 4px 15px rgba(0, 0, 0, 0.25)",
        padding: "60px 40px",
        marginTop: "-20px",
    },
    sidebarItem: {
        display: "flex",
        background: "#E1E1E3",
        padding: "10px 20px",
        height: "60px",
        lineHeight: "20px",
        alignItems: "center",
        fontWeight: 400,
        cursor: "pointer",
        color: "black",
        marginBottom: "5px",
        "&:hover": {
            background: "rgba(0, 194, 255, 0.32)",
            fontWeight: "700"
        }
    },
    sidebarImg: {
        marginRight: "25px",
        width: "40px",
        height: "40px",
    },
    mainContainer: {
        padding: "40px 60px 0 60px"
    },



    headerContainer: {
        width: "100%",
        margin: 0,
    },
    headerBox: {
        background: "#00C2FF52",
        padding: "15px 25px",
        display: "flex",
    },
    headerLeftContainer: {
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    accountBox: {
        marginTop: "20px",
        fontSize: "22px",
        color: "black",
        lineHeight: "24px",
        fontWeight: "700"
    },
    accountImg: {
        marginRight: "10px"
    },
    addMoneyBox: {
        marginBottom: "10px",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "24px",
        color: "#174293",
    },
    headerSubLabel: {
        textAlign: "right",
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "24px",
        color: "black"
    },
    headerLabel: {
        textAlign: "right",
        fontSize: "48px",
        fontWeight: "700",
        color: "black",
        lineHeight: "60px"
    },
    featureSubBox: {
        width: "100%",
        margin: 0,
    },
    featureSubItem: {
        margin: "10px 0",
        width: "120px",
        height: "120px",
        background: "white",
        boxShadow: "4px 4px 7px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    featureSubLabel: {
        marginTop: "10px",
        marginBottom: "0",
        color: "black",
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "14px"
    },
    reportBox: {
        height: "100%",
        background: "#00C2FF52",
        padding: "25px",
        textAlign: "center",
        fontSize: "18px",
        color: "black",
        fontWeight: "700",
        lineHeight: "24px"
    },
    transactionContainer: {
        background: "#E1E1E3",
        marginTop: "50px",
        width: "100%",
    },
    transactionHeader: {
        height: "60px",
        width: "100%",
        fontSize: "20px",
        color: "black",
        fontWeight: "400",
        lineHeight: "60px",
        paddingLeft: "30px"
    },
    transactionContent: {
        borderTop: "5px solid #174293",
    },
    emptyBox: {
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
    },
    emptyLabel: {
        fontSize: "32px",
        fontWeight: "500",
        color: "black",
        height: "70px",
        padding: "15px 40px",
        lineHeight: "40px",
        background: "rgba(160, 160, 160, 0.56)",
        borderRadius: "18px",
    }
});

export default indexPageStyle;
