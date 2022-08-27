import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/referrals";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import CButton from "/components/Custom/CButton";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
const useStyles = makeStyles(styles);

export default function ReferralsPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    const tableData = [
        // {
        //     serialNum: "012",
        //     name: "test",
        //     join_date: "2022-08-27"
        // },
        // {
        //     serialNum: "012",
        //     name: "test",
        //     join_date: "2022-08-27"
        // },
        // {
        //     serialNum: "012",
        //     name: "test",
        //     join_date: "2022-08-27"
        // },
    ];

    return (
        <div>
            <div
                className={classes.container}
            >
                <HeaderSection isGuest={isGuest} />
                <CommonHeaderSection isGuest={isGuest} />
                <div className="alert-info mt-40">
                    Earn up to 500NGN when your referral perform any transaction.
                </div>
                <div className={classes.referralsContainer}>
                    <div className="alert-white">Login/Register to view your referral link</div>
                    <div className="w-full mt-15px">
                        <table className="table-datatable">
                            <thead>
                            <tr>
                                <th>S/L Number</th>
                                <th>Name</th>
                                <th>Join Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                tableData.map((referral, key) => {
                                    return <tr key={key.toString()}>
                                        <td>{referral.serialNum}</td>
                                        <td>{referral.name}</td>
                                        <td>{referral.join_date}</td>
                                    </tr>
                                })
                            }
                            {
                                tableData.length == 0 &&
                                    <tr>
                                        <td className="empty-table" colSpan={3} align="center">You have empty network Link</td>
                                    </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
