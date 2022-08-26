import React, {Component} from "react";
import Router from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import CButton from "/components/Custom/CButton";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/layoutSections/headerStyle";

const useStyles = makeStyles(styles);

export default function HeaderSection(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div
            className={`${classes.navigation} ${classes.headerContainer}`}
        >
            <Header
                brand="Navbar with profile"
                rightLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={(e) => e.preventDefault()}
                                color="transparent"
                            >
                                Home
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={(e) => e.preventDefault()}
                                color="transparent"
                            >
                                Commission
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={(e) => e.preventDefault()}
                                color="transparent"
                            >
                                Support
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={(e) => e.preventDefault()}
                                color="transparent"
                            >
                                About
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.registerNavLink}
                                onClick={(e) => e.preventDefault()}
                                color="info"
                                round
                            >
                                Login
                            </Button>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Button
                                href="#pablo"
                                className={classes.registerNavLink}
                                onClick={(e) => e.preventDefault()}
                                color="info"
                                round
                            >
                                Register
                            </Button>
                        </ListItem>
                    </List>
                }
            />
            <div className={classes.headerBox}>
                {rest.isGuest ?
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
    );
}
