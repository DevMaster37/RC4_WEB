import {
    container,
    title,
    grayColor
} from "/styles/jss/nextjs-material-kit.js";
import headerLinksStyle from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const homePageStyle = (theme) => ({
    section: {
        padding: "70px 0",
        paddingTop: "0"
    },
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    navbar: {
        marginBottom: "-20px",
        zIndex: "100",
        position: "relative",
        overflow: "hidden",
        "& header": {
            borderRadius: "0"
        }
    },
    navigation: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: "0",
        minHeight: "740px"
    },
    formControl: {
        [theme.breakpoints.down("md")]: {
            margin: "10px 0 0 15px !important",
            color: grayColor
        },
        margin: "10px 0 0 0 !important",
        paddingTop: "0"
    },
    inputRootCustomClasses: {
        margin: "0!important"
    },
    searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
    },
    ...headerLinksStyle(theme),
    img: {
        width: "40px",
        height: "40px",
        borderRadius: "50%"
    },
    imageDropdownButton: {
        [theme.breakpoints.down("md")]: {
            top: "0",
            margin: "5px 15px"
        },
        padding: "0px",
        top: "4px",
        borderRadius: "50%",
        marginLeft: "5px"
    },

    // custom styles
    headerContainer: {
        padding: "50px 50px 30px 50px"
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
    }
});

export default homePageStyle;
