import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import CButton from "/components/Custom/CButton";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/layoutSections/commonHeaderStyle";

const useStyles = makeStyles(styles);

export default function CommonHeaderSection(props) {
    const classes = useStyles();
    const {...rest} = props;

    const goToServices = () => {

    };

    return (
        <div className={classes.headerBox}>
            {props.isGuest ?
                <>
                    <p className={classes.headerSubLabel}>
                        Delivering Services<br/>
                        to Millions Worldwide
                    </p>
                    <p className={`${classes.headerLabel} mt-20px`}>FAST,EASY & SECURE.</p>
                    <CButton onClick={() => goToServices()} color="white" className="mt-35px">Explore our Services</CButton>
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
            <img
                className={classes.headerImg}
                src="/img/img_dashboard.png"
                alt="blue logo"
            />
        </div>
    );
}
