const commonHeaderStyle = (theme) => ({
    headerContainer: {
        padding: "30px 50px",
    },
    headerBox: {
        position: "relative",
        width: "100%",
        minHeight: "450px",
        background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
        borderRadius: "0px 0px 200px 0px",
        paddingTop: "60px",
        paddingLeft: "40px"
    },
    headerSubLabel: {
        color: "white",
        fontWeight: "700",
        fontSize: "32px",
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
        height: "410px",
    },
});

export default commonHeaderStyle;
