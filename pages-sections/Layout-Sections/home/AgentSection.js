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
import CButton from "/components/Custom/CButton";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CardBody from "../../components/Card/CardBody";
const useStyles = makeStyles(styles);

export default function HistoryPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    const [value, setValue] = React.useState("sales_report")
    const tabs = [
        { key:"sales_report", value: "Sales Report"},
        { key:"sub_account", value: "Sub Account"},
        { key:"agent_commission", value: "Agent Commission"},
        { key:"invoice", value: "Invoice"},
    ];

    const tabContent = {
        "sales_report": (<p>asdasd</p>),
        "sub_account": (<p>2asdasd</p>),
        "agent_commission": (<p>3asdasd</p>),
        "invoice": (<p>4asdasd</p>)
    };

    const linkYourCard = () => {

    };

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
                            {
                                tabs.map((tab) => {
                                    let classname = "br-0 mr-10px";
                                    let color = "transparent";
                                    if (value == tab.key)
                                    {
                                        classname += " text-dark-blue";
                                        color = "white";
                                    }
                                    return <CButton onClick={() => setValue(tab.key)} color={color} className={classname}>{tab.value}</CButton>
                                })
                            }
                        </div>
                        <div key={value}>
                            {tabContent[value]}
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
            <FooterSection />
        </div>
    );
}
