import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import CButton from "/components/Custom/CButton";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/SalesReportTab";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function SalesReportTab(props) {
    const classes = useStyles();
    const {tableData, ...rest} = props;
    return (
        <>
            <div className={classes.searchBox}>
                <div className="w-fit-content">
                    <p className="fs-14 w-full fw-500 text-black mt-20px">Agent Account Manager</p>
                    <GridContainer className="mt-20px w-fit-content">
                        <GridItem sm={6} md={3}>
                            <input className="input-white" value="All" placeholder="Search" />
                        </GridItem>
                        <GridItem sm={6} md={3}>
                            <input className="input-white" value="2022-08-16" placeholder="Search" />
                        </GridItem>
                        <GridItem sm={6} md={3}>
                            <input className="input-white" value="2022-08-16 23:59:59" placeholder="Search" />
                        </GridItem>
                        <GridItem sm={6} md={3}>
                            <CButton color="info" className="h-40 br-0 m-0 text-black">View Transaction</CButton>
                        </GridItem>
                    </GridContainer>
                    <div className="w-full">
                        <GridContainer className="mt-20px">
                            <GridItem sm={6} md={3}>
                                <input className="input-white" value="All" placeholder="Enter Email" />
                            </GridItem>
                            <GridItem sm={6} md={3}>
                                <CButton color="info" className="h-40 br-0 m-0 text-black">Send Email</CButton>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <div className="w-full mt-20px p-0-40">
                <div className="table-responsive">
                    <table className="table-transparent table-header-bordered lh-20">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>First Transaction</th>
                            <th>Last Transaction</th>
                            <th>Total Amount</th>
                            <th>Transaction Count</th>
                            <th>Top Up</th>
                            <th>AC Balance</th>
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
                        <tr>
                            <td colSpan={3}></td>
                            <td>Total</td>
                            <td>0</td>
                            <td colSpan={2}>0</td>
                            <td>0</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full mt-20px p-0-40 mb-40px">
                <div className="table-responsive">
                    <table className="table-transparent lh-20">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>AIRTIME/PROFIT</th>
                            <th>TV/PROFIT</th>
                            <th>POWER/PROFIT</th>
                            <th>OTHERS/PROFIT</th>
                            <th>TOTAL VALUE</th>
                            <th>TOTAL PROFIT</th>
                            <th>TOTAL CASH</th>
                            <th>FROM WALLET</th>
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
                    <p className="fs-18 fw-600 mt-40 ml-30">
                        Closing balance : ₦0.00<br/>
                        Total cash received : ₦0.00<br/>
                        Total value debited from wallet : ₦0.00<br/>
                        Total profit : ₦0.00
                    </p>
                </div>
            </div>
        </>
    );
}
