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

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <HeaderSection isGuest={true} />
            <FooterSection />
        </div>
    );
}
