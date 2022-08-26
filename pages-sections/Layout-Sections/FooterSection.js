import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import CButton from "/components/Custom/CButton";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/layoutSections/footerStyle";

const useStyles = makeStyles(styles);

export default function FooterSection(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div
            className={`${classes.navigation} ${classes.footerContainer}`}
        >
            <Header
                brand="Info Color"
                color="info"
                rightLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <p className={classes.footerLink}>Contact Us</p>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <p className={classes.footerLink}>{"API - {Developer}"}</p>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <p className={classes.footerLink}>About Us</p>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <p className={classes.footerLink}>Products</p>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <p className={classes.footerLink}>Language</p>
                        </ListItem>
                    </List>
                }
            />
        </div>
    );
}
