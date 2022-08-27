import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/signupPage";
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
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    function signup() {

    }

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <CommonHeaderSection isGuest={isGuest} />
                <GridContainer justify="center" className={"mt-64px mb-48px"}>
                    <GridItem xs={12} sm={6} md={6} className={classes.signContainer}>
                        <Card className={classes[cardAnimaton] + " h-75 " + classes.transparentCard}>
                            <CardHeader className={classes.cardHeader}>
                            </CardHeader>
                            <CardBody className={classes.centerContainer}>
                                <div>
                                    <p className={classes.bigText + " text-center"}>Already got<br/>an account?</p>
                                    <div className={"text-center"}>
                                        <Link href="/login">
                                            <Button round color="white" size="xl">
                                                Login
                                            </Button>
                                        </Link>
                                    </div>

                                </div>
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card className={classes[cardAnimaton] + " " + classes.transparentCard}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    <Button round size={"xl"} color={"info"} className={"p-0 m-0"}>
                                        <div className={classes.whiteButton + " w-50"}>
                                            Login
                                        </div>
                                        <div className={"w-50"}>
                                            Sign Up
                                        </div>
                                    </Button>
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
                                    <CustomInput
                                        id="confirmpass"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            placeholder: "Confirm Password",
                                            autoComplete: "off",
                                        }}
                                    />
                                    <div className={"text-center"}>
                                        <Button round color="info" size="xl" onClick={signup()}>
                                            Sign Up
                                        </Button>
                                    </div>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <div className={"d-flex flex-column"}>
                                        <Button color="white" className={"text-black"} round size="lg">
                                            <img src="/img/ic_google.svg" className={"w-32px h-32px"}/> Sign Up with Gmail
                                        </Button>
                                        <Button color="white" className={"text-black"} round size="lg">
                                            <img src="/img/ic_fb.svg" className={"w-32px h-32px"}/>&nbsp;Sign Up with Facebook
                                        </Button>
                                    </div>
                                </CardFooter>
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            <FooterSection />
        </div>
    );
}
