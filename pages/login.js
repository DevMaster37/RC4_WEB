import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/loginPage";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import CButton from "/components/Custom/CButton";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import CustomInput from "../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../components/Card/CardFooter";
import GridContainer from "../components/Grid/GridContainer";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    function login() {

    }

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <CommonHeaderSection isGuest={isGuest} />
                <GridContainer justify="center" className={"mt-64px mb-48px"}>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card className={classes[cardAnimaton] + " " + classes.transparentCard}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    <img
                                        src="/img/avatar.svg"
                                        alt="..."
                                        className={classes.imgRoundedCircle + " " + classes.imgFluid + " " + classes.avatar}
                                    />
                                    <h4 className={"text-primary"}>Welcome Back!</h4>
                                </CardHeader>
                                <CardBody>
                                    <CustomInput
                                        id="first"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            type: "text",
                                            placeholder: "Enter Email or Username",
                                        }}
                                    />
                                    <CustomInput
                                        id="pass"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            placeholder: "Password",
                                            autoComplete: "off",
                                        }}
                                    />
                                    <div className={"text-right"}>
                                        <Link href="/resetpassword">
                                            <a className={classes.forgetPassword}>
                                                Forget Password?{" "}
                                            </a>
                                        </Link>
                                    </div>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button round color="info" size="xl" onClick={login()}>
                                        Login
                                    </Button>
                                </CardFooter>
                            </form>
                            <h5 className={"text-center"}>Don???t have an account already? <a className={classes.signup} href="/signup">Sign Up</a></h5>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} className={classes.signContainer}>
                        <Card className={classes[cardAnimaton] + " h-75 " + classes.transparentCard}>
                            <CardHeader className={classes.cardHeader}>
                                <img
                                    src="/img/splash_logo.svg"
                                    alt="..."
                                    xs={12} sm={6} md={6}
                                />
                            </CardHeader>
                            <CardBody>
                                <div className={classes.typo}>
                                    <h1 className={"text-center text-white"}>New Here?</h1>
                                    <p className={"text-center text-white fs-20"}>You can create your account for a great experience</p>
                                </div>
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                                <Link href="/signup">
                                    <Button round color="white" size="xl">
                                        Sign Up
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            <FooterSection />
        </div>
    );
}
