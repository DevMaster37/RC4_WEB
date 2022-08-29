import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import CButton from "/components/Custom/CButton";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

export default function SalesReportTab(props) {
    const {tableData, ...rest} = props;
    return (
        <>
            <div className="p-0-60 w-full mt-40">
                <p className="fs-20 fw-500 text-black">Account Manager</p>
                <div className="d-flex justify-between">
                    <input className="input-white w-280 mw-280" placeholder="Search User" />
                    <CButton color="info" className="h-40 br-0 m-0">View Transaction</CButton>
                </div>
            </div>
        </>
    );
}
