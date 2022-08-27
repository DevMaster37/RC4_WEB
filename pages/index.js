import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/index";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import CButton from "/components/Custom/CButton";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    const goToReferralLink = () => {

    };

    const downloadIOS = () => {

    };

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <CommonHeaderSection isGuest={isGuest} />
                <div className={classes.headerSubBox}>
                    <div className="pt-15px">
                        <p className="fs-14 fw-500 text-black">Get your personal Referral Link</p>
                        <CButton onClick={() => goToReferralLink()} color="primary" className="br-5px">Click Here</CButton>
                    </div>
                    <p className={`${classes.headerGradientLabel} text-gradient`}>
                        EARN UP TO NGN200,000 MONTHLY<br/>
                        WITH REFFERALS OR AS AN AGENT<br/>
                        WITH RECHARGE4.
                    </p>
                </div>
            </div>
            <div className={classes.featuresContainer}>
                <p className={`${classes.featureTitle} text-right text-white`}>FEATURES</p>
                <div className={classes.featuresBox}>
                    <div className={classes.featuresItem}>
                        <img
                            className={classes.featureImg}
                            src="/img/ic_secure_payment.svg"
                            alt="trust pay"
                        />
                        <p className={classes.featureLabel}>
                            <strong>
                                100%<br/>
                                Secure Payments<br/>
                            </strong>
                            Moving your card details<br/>
                            to a much more<br/>
                            secured place.
                        </p>
                    </div>
                    <div className={classes.featuresItem}>
                        <img
                            className={classes.featureImg}
                            src="/img/ic_trust.svg"
                            alt="trust pay"
                        />
                        <p className={classes.featureLabel}>
                            <strong>
                                Trust pay<br/>
                            </strong>
                            100%<br/>
                            Payment Protection.<br/>
                            Easy refund.
                        </p>
                    </div>
                    <div className={classes.featuresItem}>
                        <img
                            className={classes.featureImg}
                            src="/img/ic_refer.svg"
                            alt="trust pay"
                        />
                        <p className={classes.featureLabel}>
                            <strong>
                                Refer & Earn<br/>
                            </strong>
                            Invite a friend<br/>
                            to sign up<br/>
                            and earn up to<br/>
                            NGN10000.
                        </p>
                    </div>
                    <div className={classes.featuresItem}>
                        <img
                            className={classes.featureImg}
                            src="/img/ic_support.svg"
                            alt="trust pay"
                        />
                        <p className={classes.featureLabel}>
                            <strong>
                                24X7 Support<br/>
                            </strong>
                            We're here to help.<br/>
                            Have a query<br/>
                            and need help?
                        </p>
                    </div>
                </div>
            </div>
            <GridContainer justify="center" className={classes.featureSubBox}>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_airtime.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>Airtime & Data</p>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_tv.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>Cable/TV</p>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_electricity.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>Electricity Bills</p>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_send_money.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>Send Money</p>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_lottery.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>Betting & Lottery</p>
                    </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                    <div className={classes.featureSubItem}>
                        <img
                            src="/img/ic_utility.svg"
                            alt=""
                        />
                        <p className={classes.featureSubLabel}>
                            Utility Fee<br/>
                            Payments
                        </p>
                    </div>
                </GridItem>
            </GridContainer>
            <div className={classes.utilitiesContainer}>
                <p className={`${classes.utilitiesHeader} text-gradient`}>NUMBER #1 IN UTILITY PAYMENT</p>
                <GridContainer justify="center" className={classes.utilitiesBox}>
                    <GridItem sm={12} md={4} className="d-flex justify-center">
                        <div className={classes.utilitiesItem}>
                            <img
                                className={classes.featureImg}
                                src="/img/ic_group_wallet.svg"
                                alt=""
                            />
                            <p className={classes.utilitiesLabel}>
                                <strong>Wallet</strong><br/>
                                Receive payment<br/>
                                from any bank, Bank Deposit,<br/>
                                transfer, USSD etc
                            </p>
                        </div>
                    </GridItem>
                    <GridItem sm={12} md={4} className="d-flex justify-center">
                        <div className={classes.utilitiesItem}>
                            <img
                                className={classes.featureImg}
                                src="/img/ic_auto_recharge.svg"
                                alt=""
                            />
                            <p className={classes.utilitiesLabel}>
                                <strong>
                                    Auto Recharge/<br/>
                                    Bulk payment<br/>
                                </strong>
                                Recharge for convenience,<br/>
                                Schedule Airtime and<br/>
                                payment to your staff,<br/>
                                Friends and Family<br/>
                                at no extra cost

                            </p>
                        </div>
                    </GridItem>
                    <GridItem sm={12} md={4} className="d-flex justify-center">
                        <div className={classes.utilitiesItem}>
                            <img
                                className={classes.featureImg}
                                src="/img/ic_creditcard.svg"
                                alt=""
                            />
                            <p className={classes.utilitiesLabel}>
                                <strong>Payment Method</strong><br/>
                                Pay with your credit card<br/>
                                or Debit card at<br/>
                                no extracost
                            </p>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.securityContainer}>
                <img
                    className={classes.securityImg}
                    src="/img/ic_safety.svg"
                    alt=""
                />
                <div className={classes.securityBox}>
                    <p className={classes.securityHeader}>
                        SAFETY AND  SECURITY<br/>
                        GAURANTEED
                    </p>
                    <p className={classes.securityDesc}>
                        Recharge4 take security seriously, every payment made on<br/>
                        recharge4 is 100% secure
                    </p>
                    <div className={classes.securityList}>
                        <div className={classes.securityItem}>
                            <p className={classes.securityLabel}>
                                ISO 27001 & 22301<br/>
                                Certification
                            </p>
                            <p className={classes.securitySubLabel}>
                                The ISO 27001 & 22301 certification means<br/>
                                that we have acceptable business practices<br/>
                                and processes, including a<br/>
                                robust business continuity plan.<br/>
                            </p>
                            <div className={classes.securityImgContainer}>
                                <img
                                    src="/img/ic_certificate.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={classes.securityItem}>
                            <p className={classes.securityLabel}>
                                ISO 27001 & 22301<br/>
                                Certification
                            </p>
                            <p className={classes.securitySubLabel}>
                                The ISO 27001 & 22301 certification means<br/>
                                that we have acceptable business practices<br/>
                                and processes, including a<br/>
                                robust business continuity plan.
                            </p>
                            <div className={classes.securityImgContainer}>
                                <img
                                    src="/img/ic_fingerprint.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.issueBox}>
                <p className={classes.issueLabel}>
                    Issue Cards,<br/>
                    Create New Businesses
                </p>
                <p className={`${classes.issueSubLabel} mt-20px`}>
                    Create cards for your team,<br/>
                    add spending limits and so much more.<br/>
                    Create virtual Mastercard and VISA cards<br/>
                    Using the Recharge4 you can instantly<br/>
                    create and manage virtual cards.<br/>
                    Cards can be used instantly<br/>
                    through mobile wallets and global websites.
                </p>
                <img
                    className={classes.issueImg}
                    src="/img/img_business.png"
                    alt="blue logo"
                />
            </div>
            <div className={classes.downloadContainer}>
                <div className={classes.downloadBox}>
                    <p className={classes.downloadLabel}>
                        Download<br/>
                        Recharge4 Mobile App<br/>
                        Now
                    </p>
                    <div onClick={() => downloadIOS()} className={classes.complexBtn}>
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
                    <div onClick={() => downloadIOS()} className={classes.complexBtn}>
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
                    <img
                        className={classes.downloadImg}
                        src="/img/img_phone.png"
                        alt="blue logo"
                    />
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
