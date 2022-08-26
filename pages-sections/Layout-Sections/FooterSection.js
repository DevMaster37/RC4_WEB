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
                brand={
                    <img
                        src="/img/splash_logo.svg"
                        alt="white logo"
                    />
                }
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
            <div className={classes.footerBox}>
                <p>
                    England Office:<br/>
                    Prime Airtime Ltd First Floor 85 Great Portland StreetLondon,<br/>
                    W1W 7LT United Kingdom RN:10382389<br/>
                </p>
                <p>
                    Nigeria Office:<br/>
                    54b Adeniyi Jones Ikeja, Lagos Nigeria RC:1555811<br/>
                    +44 (0)843 849 6539, +234 (0)902 773 0200<br/>
                </p>
                <div className="text-center">
                    <ul className={classes.footerLinkList}>
                        <li className={classes.footerLinkItem}>Privacy Policy</li>
                        <li className={classes.footerLinkItem}>Terms & Condition</li>
                        <li className={classes.footerLinkItem}>Refund Policy</li>
                        <li className={classes.footerLinkItem}>Currency</li>
                        <li className={classes.footerLinkItem}>Reocurring Payment</li>
                    </ul>
                </div>
                <div className="text-center">
                    <ul className={classes.footerLinkList}>
                        <li className={classes.footerLinkItem}>
                            <a href="javascript:void(0)">
                                <img
                                    src="/img/ic_facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                        </li>
                        <li className={classes.footerLinkItem}>
                            <a href="javascript:void(0)">
                                <img
                                    src="/img/ic_twitter.svg"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li className={classes.footerLinkItem}>
                            <a href="javascript:void(0)">
                                <img
                                    src="/img/ic_linkedin.svg"
                                    alt="linkedin"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
