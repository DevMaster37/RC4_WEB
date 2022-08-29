import React, {Component} from "react";
import Router from "next/router";
import Select from "@material-ui/core/Select";
import Button from "/components/CustomButtons/Button";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/featurePage";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import formatCollectionOptionLabel from "/components/Create/Item/FormatCollectionOptionLabel";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import CustomInput from "../components/CustomInput/CustomInput";
import CardFooter from "../components/Card/CardFooter";
import GridContainer from "../components/Grid/GridContainer";

const useStyles = makeStyles(styles);

export default function SendMoneyPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    const collectionOptions = [
        { value: "NFTrees", label: "NFTrees", customAbbreviation: ""},
        { value: "Tank Wars Zone NFT", label: "Tank Wars Zone NFT", customAbbreviation: ""},
        { value: "PIXEL GHOST", label: "PIXEL GHOST", customAbbreviation: ""},
        { value: "Velas Pingy", label: "Velas Pingy", customAbbreviation: ""},
    ];

    function done() {
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
                <CommonHeaderSection isGuest={isGuest} />
                <GridContainer justify="center" className={"mt-64px mb-108px"}>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card className={classes[cardAnimaton] + " " + classes.transparentCard}>
                            <CardHeader className={classes.cardHeader}>
                                <div className={classes.featureSubItem}>
                                    <img
                                        src="/img/ic_airtime.svg"
                                        alt=""
                                        className={classes.imgRoundedCircle + " " + classes.imgFluid + " " + classes.featureIcon}
                                    />
                                    <p className={ `${classes.featureSubLabel}` }>Airtime & Data</p>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className={"text-primary fs-64"}>
                                    Download<br/>
                                    Recharge4 Mobile App<br/>
                                    Now
                                </p>
                                <GridContainer className={classes.downloadContainer + " d-flex"}>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <div className={classes.vertialCenterContainer}>
                                            <div onClick={() => download_apple()} className={classes.complexBtn}>
                                                <img
                                                    className={classes.complexBtnImg}
                                                    src="/img/ic_apple.svg"
                                                    alt=""
                                                />
                                                <div className={classes.complexBtnLabelBox}>
                                                    <span className={`fs-18`}>Download on the</span><br/>
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
                                                    <span className={`fs-14`}>ANDROID APP ON</span><br/>
                                                    <span className={`${classes.complexBtnLabel} fs-40`}>Google Play</span>
                                                </div>
                                            </div>
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={6} className={classes.centerContainer}>
                                        <img
                                            src="/img/img_phone.png"
                                            alt="blue logo"
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card className={classes[cardAnimaton] + " " + classes.blueCard}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    <img
                                        src="/img/ic_airtime.svg"
                                        alt="..."
                                        className={classes.imgRoundedCircle + " " + classes.imgFluid + " " + classes.featureIcon}
                                    />
                                    <h4 className={classes.featureSubLabel}>Airtime & Data</h4>
                                </CardHeader>
                                <CardBody>
                                    <CustomInput
                                        id="category"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            type: "select",
                                            placeholder: "Select a Category",
                                        }}
                                    />
                                    <CustomInput
                                        id="amount"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            type: "number",
                                            placeholder: "Amount",
                                            autoComplete: "off",
                                        }}
                                    />
                                    <CustomInput
                                        id="phone"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            type: "select",
                                            placeholder: "Enter Phone Number",
                                            endAdornment: (
                                                <img src={"/img/flag_nig.svg"}/>
                                            ),
                                        }}
                                    />
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button className={"text-black mt-35px mb-64px"} round color="info" size="xl" onClick={done()}>
                                        DONE
                                    </Button>
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
