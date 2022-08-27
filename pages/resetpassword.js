import React, {Component} from "react";
import Button from "/components/CustomButtons/Button";
import Header from "/components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/resetpasswordPage";
import HeaderSection from "/pages-sections/Layout-Sections/HeaderSection";
import CommonHeaderSection from "/pages-sections/Layout-Sections/CommonHeaderSection";
import FooterSection from "/pages-sections/Layout-Sections/FooterSection";
import CButton from "/components/Custom/CButton";
import GridItem from "../components/Grid/GridItem";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import CustomInput from "../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import CardFooter from "../components/Card/CardFooter";
import GridContainer from "../components/Grid/GridContainer";
import Link from "next/link";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles(styles);

export default function ResetPasswordPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    const isGuest = true;

    function done() {

    }

    return (
        <div>
            <div
                className={`${classes.navigation} ${classes.container}`}
            >
                <HeaderSection isGuest={isGuest} />
                <CommonHeaderSection isGuest={isGuest} />
                <GridContainer justify="center" className={"mt-35x mb-48px"}>
                    <GridItem xs={12} sm={6} md={6}>
                        <Card className={classes[cardAnimaton] + " " + classes.transparentCard}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    <img
                                        src="/img/ic_reset_password.svg"
                                        alt="..."
                                        className={classes.imgRoundedCircle + " " + classes.imgFluid + " " + classes.avatar}
                                    />
                                    <h4 className={"text-primary"}>Reset Password</h4>
                                </CardHeader>
                                <CardBody>
                                    <CustomInput
                                        id="newpass"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            placeholder: "Enter New Password",
                                            autoComplete: "off",
                                        }}
                                    />
                                    <CustomInput
                                        id="confirmpass"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            placeholder: "Confirm New Password",
                                            autoComplete: "off",
                                        }}
                                    />
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button className={"text-black"} round color="info" size="xl" onClick={done()}>
                                        DONE
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
            <FooterSection />
        </div>
    );
}
