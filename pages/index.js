import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "../components/CustomButtons/Button";
import Header from "../components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../styles/jss/nextjs-material-kit/pages/index";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import FooterSection from "../pages-sections/Layout-Sections/FooterSection";
import CButton from "../components/Custom/CButton";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    const goToReferralLink = () => {

    };

    const goToServices = () => {

    };

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <div className={classes.headerBox}>
                    {isGuest ?
                        <>
                            <p className={classes.headerSubLabel}>
                                Delivering Services<br/>
                                to Millions Worldwide
                            </p>
                            <p className={`${classes.headerLabel} mt-20px`}>FAST,EASY & SECURE.</p>
                            <CButton onClick={() => goToServices()} color="white" className="mt-35px">Explore our Services</CButton>
                        </>
                        :
                        <>
                            <p className={classes.headerDesc}>
                                Delivering Services<br/>
                                to Millions<br/>
                                Worldwide
                            </p>
                        </>
                    }
                    <img
                        className={classes.headerImg}
                        src="/img/img_dashboard.png"
                        alt="blue logo"
                    />
                </div>
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
            <FooterSection />
        </div>
    );
}
