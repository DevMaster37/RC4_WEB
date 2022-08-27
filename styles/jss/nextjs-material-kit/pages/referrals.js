import {
    container,
    title,
    grayColor
} from "/styles/jss/nextjs-material-kit.js";

const refferalPageStyle = (theme) => ({
    // custom styles
    container,
    referralsContainer: {
        background: "linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)",
        borderRadius: "0",
        padding: "20px 40px",
        marginTop: "20px",
        minHeight: "420px",
        marginBottom: "70px"
    }
});

export default refferalPageStyle;
