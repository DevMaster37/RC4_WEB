import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/helpPage";
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

export default function HelpPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    function search() {

    }

    function help() {
    }

    function feedback() {
    }

    function dev_resource() {
    }

    function download_apple() {

    }

    function download_google() {

    }

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <div className={classes.helpContainer}>
                    <div className={classes.blueRect}></div>
                    <div className={classes.whiteButton + " w-100 pt-64px"}>
                        <Button round color="primary" size="xl" onClick={search()}>
                            Search
                        </Button>
                    </div>
                    <GridContainer justify="center" className={"mt-64px mb-48px"}>
                        <GridItem xs={12} sm={12} md={4}>
                            <Button color="white" size="xl" onClick={help()}>
                                <img src="/img/ic_help.svg"/>
                                <hr/>
                                <p>
                                    Help & Documentation<br/>
                                    Receive payment from any bank,<br/>
                                    Bank Deposit, transfer,<br/>
                                    USSD etc
                                </p>
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Button color="white" size="xl" onClick={feedback()}>
                                <img src="/img/ic_feedback.svg"/>
                                <hr/>
                                <p>
                                    Feedback<br/>
                                    Schedule Airtime and payment to<br/>
                                    your staff, Friends and Family at<br/>
                                    no extra cost
                                </p>
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Button color="white" size="xl" onClick={dev_resource()}>
                                <img src="/img/ic_developer_resources.svg"/>
                                <hr/>
                                <p>
                                    Developer Resources<br/>
                                    Pay with your credit card<br/>
                                    or Debit card at no<br/>
                                    extracost
                                </p>
                            </Button>
                        </GridItem>
                    </GridContainer>
                    <GridContainer justify="center" className={"mt-64px mb-48px"}>
                        <GridItem xs={12} sm={6} md={8} className={"text-primary"}>
                            Download<br/>
                            Recharge4 Mobile App<br/>
                            Now
                        </GridItem>
                        <GridItem xs={12} sm={6} md={4}>
                            <Button round color="black" size="xl" onClick={download_apple()}>
                                <img src="/img/ic_apple.svg"/>
                                <p>
                                    Download on thee<br/>
                                    App Store
                                </p>
                            </Button>
                            <Button round color="black" size="xl" onClick={download_google()}>
                                <img src="/img/ic_google_play.svg"/>
                                <p>
                                    ANDROID APP ON<br/>
                                    Google Play
                                </p>
                            </Button>
                        </GridItem>
                    </GridContainer>

                </div>
            </div>
            <FooterSection />
        </div>
    );
}
