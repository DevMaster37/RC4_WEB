import React, {Component} from "react";
import Button from "/components/CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import {grayColor} from "../../styles/jss/nextjs-material-kit";
const styles ={
    basicStyle: {
        display: "flex",
        alignItems: "center",
        // color: "#00C2FF",
        // backgroundColor: "white",
        padding: "12px 25px",
        lineHeight: "24px",
        borderRadius: "24px",
        fontWeight: "600",
        fontSize: "18px",
        textTransform: "unset",
        "&:hover,&:focus": {
            // color: "#00C2FF",
            // backgroundColor: "white",
            boxShadow:
                "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
            // transform: "scale(101%)"
        }
    }
};

const useStyles = makeStyles(styles);

export default function CButton(props) {
    const classes = useStyles();
    const {
        color,
        className,
        children,
        ...rest
    } = props;
    return (
        <Button {...rest} color={props.color} className={`${props.className} ${classes.basicStyle}`}>{props.children}</Button>
    );
}
