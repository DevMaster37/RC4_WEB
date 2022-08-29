import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/settings_security";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import CButton from "/components/Custom/CButton";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

export default function SecurityPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    const tableData = [];

    const linkYourCard = () => {

    }

    return (
        <div>
            <div
                className={classes.container}
            >
                <HeaderSection isGuest={isGuest} />
            </div>
            <div className={classes.topBlueBar}></div>
            <GridContainer className="m-0 mb-50px w-full">
                <GridItem sm={0} md={3} className={classes.sidebarContainer}>
                    <div className={classes.sidebarItem}>
                        <img
                            className={classes.sidebarImg}
                            src="/img/ic_dashboard.svg"
                            alt="blue logo"
                        />
                        <span>Dashboard</span>
                    </div>
                    <div className={classes.sidebarItem}>
                        <img
                            className={classes.sidebarImg}
                            src="/img/ic_transaction_history.svg"
                            alt="blue logo"
                        />
                        <span>
                            Transaction<br/>
                            History
                        </span>
                    </div>
                    <div className={classes.sidebarItem}>
                        <img
                            className={classes.sidebarImg}
                            src="/img/ic_scheduler.svg"
                            alt="blue logo"
                        />
                        <span>Scheduler</span>
                    </div>
                    <div className={classes.sidebarItem}>
                        <img
                            className={classes.sidebarImg}
                            src="/img/ic_agent.svg"
                            alt="blue logo"
                        />
                        <span>Become an Agent</span>
                    </div>
                    <div className={classes.sidebarItem}>
                        <img
                            className={classes.sidebarImg}
                            src="/img/ic_settings.svg"
                            alt="blue logo"
                        />
                        <span>Settings</span>
                    </div>
                </GridItem>
                <GridItem sm={12} md={9} className={classes.mainContainer}>
                    <div className={classes.linkCardBox}>
                        <div className={"flex-1"}>
                            <p className={"text-black fs-32 fw-400"}>
                                Set time to automatically credit your phone or<br/>
                                send money to family and friends, daily, monthly<br/>
                                and yearly, make bulk transfer, upload excell and<br/>
                                let the system handle the rest.<br/>
                                Pay using Your linked card and Wallet
                            </p>
                        </div>
                        <div className={classes.verticalCenterContainer}>
                            <Button color="white" className={"text-black"} round size="xl" onClick={linkYourCard()}>
                                <img src="/img/ic_card.svg" className={"w-48px h-48px"}/>&nbsp;Link your Cards
                            </Button>
                        </div>
                    </div>
                    <br/>
                    <p className={"text-left fw-600 fs-32"}>Scheduler Service</p>
                </GridItem>
            </GridContainer>
            <FooterSection />
        </div>
    );
}
