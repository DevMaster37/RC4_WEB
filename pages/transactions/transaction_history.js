import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/transaction_history";
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

    const goToReferralLink = () => {

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
                    <div className={classes.headerBtnContainer}>
                        <CButton onClick={() => goToReferralLink()} color="info" className="text-white br-0 mr-10px">All Transactions</CButton>
                        <CButton onClick={() => goToReferralLink()} color="info" className="text-white br-0">Refund</CButton>
                    </div>
                    <div className={classes.transactionTabBox}>
                        <span className={classes.transactionTabLabel}>Transaction for  Current Month</span>
                    </div>
                    <div className={classes.transactionContainer}>
                        <div className={classes.transactionHeader}>Transaction History</div>
                        <div className={classes.transactionContent}>
                            <div className="w-full">
                                <table className="table-white">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>View Sales Report</th>
                                        <th>
                                            <CButton onClick={() => goToReferralLink()} color="success" className="text-white br-0">Download</CButton>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tableData.map((transaction, key) => {
                                            return <tr key={key.toString()}>
                                                <td>{transaction.id}</td>
                                                <td>{transaction.etc}</td>
                                                <td>{transaction.start_date}</td>
                                                <td>{transaction.end_date}</td>
                                                <td>{transaction.sale_report}</td>
                                                <td>{transaction.download}</td>
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
