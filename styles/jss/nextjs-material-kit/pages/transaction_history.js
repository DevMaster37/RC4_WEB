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



    headerBtnContainer: {
        width: "100%",
        height: "80px",
        background: "#00C2FF52",
        display: "flex",
        padding: "10px"
    },
    transactionTabBox: {
        fontSize: "20px",
        fontWeight: "500",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px"
    },
    transactionTabLabel: {
        lineHeight: "24px",
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
        padding: "15px",
    },
});

export default indexPageStyle;
