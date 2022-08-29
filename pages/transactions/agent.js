import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/agent";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import SalesReportTab from "/pages-sections/SalesReportTab";
import CButton from "/components/Custom/CButton";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

export default function HistoryPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    const tableData = [];

    const goToServices = () => {

    }
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
                                Hi, George Igwe<br/>
                                You are few steps away<br/>
                                from becoming an agent
                            </p>
                        </div>
                        <div className={classes.verticalCenterContainer}>
                            <Button color="white" className={"text-black"} round size="xl" onClick={linkYourCard()}>
                                RaIse Payment Invoice
                            </Button>
                        </div>
                    </div>
                    <div className={classes.mainContent}>
                        <div className={classes.mainNabBox}>
                            <CButton onClick={() => goToServices()} color="white" className="text-dark-blue br-0 mr-10px">Sales Report</CButton>
                            <CButton onClick={() => goToServices()} color="transparent" className="br-0 mr-10px">Sub Account</CButton>
                            <CButton onClick={() => goToServices()} color="transparent" className="br-0 mr-10px">Agent Commission</CButton>
                            <CButton onClick={() => goToServices()} color="transparent" className="br-0">Invoice</CButton>
                        </div>
                        <SalesReportTab tableData={[]} />
                    </div>
                </GridItem>
            </GridContainer>
            <FooterSection />
        </div>
    );
}
