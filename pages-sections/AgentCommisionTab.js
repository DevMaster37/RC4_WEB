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
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import CustomInput from "../components/CustomInput/CustomInput";


export default function SalesReportTab(props) {
    const {tableData, ...rest} = props;
    return (
        <>
            <div className="p-0-60 w-full mt-40 d-flex flex-column align-item-center">
                <p className="fs-40 fw-500 text-black">Search Services</p>
                <CustomInput
                    inputRootCustomClasses="search-input"
                    inputProps={{
                        placeholder: "Find Network",
                        endAdornment: (
                            <CButton color="info" round>Search</CButton>
                        )
                    }}
                />
            </div>
        </>
    );
}
