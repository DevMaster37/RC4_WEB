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

    linkCardBox: {
        padding: "32px",
        width: "100%",
        background: "#ADEBFF",
        display: "flex",
    },
    verticalCenterContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    mainContent: {
        width: "100%",
        marginTop: "60px",
        background: "rgba(234, 234, 234, 0.65)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "300px",
    },
    mainNabBox: {
        background: "#174293",
        height: "80px",
        marginTop: "-40px",
        display: "flex",
        padding: "10px 20px",
        width: "fit-content",
        color: "white"
    },
});

export default indexPageStyle;
