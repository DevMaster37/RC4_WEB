import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/dashboard";
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
    const tableData = [];

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
                    <GridContainer className={classes.headerContainer}>
                        <GridItem sm={12} md={8} className={classes.headerBox}>
                            <GridContainer className="w-full m-0">
                                <GridItem md={5} className={classes.headerLeftContainer}>
                                    <div className={classes.accountBox}>
                                        <img
                                            className={classes.accountImg}
                                            src="/img/avatar.svg"
                                            alt="avatar"
                                        />
                                        <span>George Igwe</span>
                                    </div>
                                    <div className={classes.addMoneyBox}>
                                        <img
                                            className="mr-10px"
                                            src="/img/ic_add.svg"
                                            alt="avatar"
                                        />
                                        <span>Add Money</span>
                                    </div>
                                </GridItem>
                                <GridItem md={7}>
                                    <p className={classes.headerSubLabel}>Available Balance</p>
                                    <p className={classes.headerLabel}>NGN5,000.00</p>
                                    <GridContainer justify="center" className={classes.featureSubBox}>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
                                                    src="/img/ic_airtime.svg"
                                                    alt=""
                                                />
                                                <p className={classes.featureSubLabel}>Airtime & Data</p>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
                                                    src="/img/ic_tv.svg"
                                                    alt=""
                                                />
                                                <p className={classes.featureSubLabel}>Cable/TV</p>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
                                                    src="/img/ic_electricity.svg"
                                                    alt=""
                                                />
                                                <p className={classes.featureSubLabel}>Electricity Bills</p>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
                                                    src="/img/ic_send_money.svg"
                                                    alt=""
                                                />
                                                <p className={classes.featureSubLabel}>Send Money</p>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
                                                    src="/img/ic_lottery.svg"
                                                    alt=""
                                                />
                                                <p className={classes.featureSubLabel}>Betting & Lottery</p>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={6} sm={6} md={4} className="d-flex justify-center">
                                            <div className={classes.featureSubItem}>
                                                <img
                                                    className="wh-36px"
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
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        <GridItem sm={0} md={4} className="pr-0">
                            <div className={classes.reportBox}>
                                <span>
                                    Daiy Transaction<br/>
                                    for Current Month
                                </span>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div className={classes.transactionContainer}>
                        <div className={classes.transactionHeader}>Recent Transactions</div>
                        <div className={classes.transactionContent}>
                            <div className={classes.emptyBox}>
                                <div className={classes.emptyLabel}>No Transaction History</div>
                            </div>
                            <div className="w-full">
                                <table className="table-transparent">
                                    <thead>
                                    <tr>
                                        <th>TID</th>
                                        <th>SERVICE</th>
                                        <th>AMOUNT</th>
                                        <th>STATUS</th>
                                        <th>DATE</th>
                                        <th>#</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tableData.map((transaction, key) => {
                                            return <tr key={key.toString()}>
                                                <td>{transaction.id}</td>
                                                <td>{transaction.service}</td>
                                                <td>{transaction.amount}</td>
                                                <td>{transaction.status}</td>
                                                <td>{transaction.date}</td>
                                                <td>{transaction.etc}</td>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
            <FooterSection />
        </div>
    );
}
