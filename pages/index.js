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
import CButton from "../components/Custom/CButton";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;
    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.headerContainer}`}
            >
            <HeaderSection isGuest={isGuest} />
            <div className={classes.headerBox}>
                {isGuest ?
                    <>
                        <p className={classes.headerSubLabel}>
                            Delivering Services<br/>
                            to Millions Worldwide
                        </p>
                        <p className={`${classes.headerLabel} mt-20px`}>FAST,EASY & SECURE.</p>
                        <CButton className="mt-35px">Explore our Services</CButton>
                    </>
                    :
                    <>
                        <p className={classes.headerDesc}>
                            Delivering Services<br/>
                            to Millions<br/>
                            Worldwide
                        </p>
                    </>
                }
            </div>
            </div>
            <FooterSection />
        </div>
    );
}
