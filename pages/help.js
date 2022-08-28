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
            </div>
            <div className={classes.helpContainer}>
                <div className={classes.blueRect}></div>
                <GridItem xs={12} sm={12} md={8} className={"m-auto"}>
                    <div className={classes.searchContainer}>
                        <CustomInput
                            id="regular"
                            inputProps={{
                                placeholder: "How can i help you?",
                            }}
                            none
                            formControlProps={{
                                fullWidth: true,
                                underline: false
                            }}
                        />
                        <Button round color="primary" size="xl" onClick={search()}>
                            Search
                        </Button>
                    </div>
                    <GridContainer className={classes.whiteRect}>
                        <GridItem className={classes.centerContainer} xs={12} sm={12} lg={4}>
                            <Button className={classes.whiteShadowBox} color="white" size="xl" onClick={help()}>
                                <div className={classes.centerContainer}>
                                    <img className={classes.svgIcon} src="/img/ic_help.svg"/>
                                    <hr className={classes.hr}/>
                                    <p className={classes.colorPrimary + " fs-16"}>
                                        <b>Help & Documentation</b><br/>
                                        Receive payment from any bank,<br/>
                                        Bank Deposit, transfer,<br/>
                                        USSD etc
                                    </p>
                                    <p className="w-100 text-right text-primary fs-16">More>></p>
                                </div>
                            </Button>
                        </GridItem>
                        <GridItem className={classes.centerContainer} xs={12} sm={12} lg={4}>
                            <Button className={classes.whiteShadowBox} color="white" size="xl" onClick={feedback()}>
                                <div className={classes.centerContainer}>
                                    <img className={classes.svgIcon} src="/img/ic_feedback.svg"/>
                                    <hr className={classes.hr}/>
                                    <p className={classes.colorPrimary + " fs-16"}>
                                        <b>Feedback</b><br/>
                                        Schedule Airtime and payment to<br/>
                                        your staff, Friends and Family at<br/>
                                        no extra cost
                                    </p>
                                    <p className="w-100 text-right text-primary fs-16">More>></p>
                                </div>
                            </Button>
                        </GridItem>
                        <GridItem className={classes.centerContainer} xs={12} sm={12} lg={4}>
                            <Button className={classes.whiteShadowBox} color="white" size="xl" onClick={dev_resource()}>
                                <div className={classes.centerContainer}>
                                    <img className={classes.svgIcon} src="/img/ic_developer_resources.svg"/>
                                    <hr className={classes.hr}/>
                                    <p className={classes.colorPrimary + " fs-16"}>
                                        <b>Developer Resources</b><br/>
                                        Pay with your credit card<br/>
                                        or Debit card at no<br/>
                                        extracost
                                    </p>
                                    <p className="w-100 text-right text-primary fs-16">More>></p>
                                </div>
                            </Button>
                        </GridItem>
                    </GridContainer>
                    <div className={"d-flex justify-between mt-64px mb-48px"}>
                        <div className={"text-primary fs-48"}>
                            Download<br/>
                            Recharge4 Mobile App<br/>
                            Now
                        </div>
                        <div xs={12} sm={6} md={4}>
                            <div onClick={() => download_apple()} className={classes.complexBtn}>
                                <img
                                    className={classes.complexBtnImg}
                                    src="/img/ic_apple.svg"
                                    alt=""
                                />
                                <div className={classes.complexBtnLabelBox}>
                                    <span>Download on the</span><br/>
                                    <span className={classes.complexBtnLabel}>App Store</span>
                                </div>
                            </div>
                            <div onClick={() => download_google()} className={classes.complexBtn}>
                                <img
                                    className={classes.complexBtnImg}
                                    src="/img/ic_googleplay.svg"
                                    alt=""
                                />
                                <div className={classes.complexBtnLabelBox}>
                                    <span className="fs-10">ANDROID APP ON</span><br/>
                                    <span className={`${classes.complexBtnLabel} fs-20`}>Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </GridItem>
            </div>
            <FooterSection />
        </div>
    );
}
