import React, {useCallback} from "react";
import {Box, Button, TextField} from "@material-ui/core";
import {withRouter, Redirect} from "react-router";
import app from "../../base.js";
import LogoPoker from "../../img/pokker-office.svg"
import styles from './style.module.css';

const SignUp = ({history}: any) => {
    const handleSignUp = useCallback(async (event: any )=> {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/Poker999");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const handleClickLogin = () => {
        history.push("/login");
    }


    return (
        <div className={styles.main}>
            <Box
                className={styles.form}
                onSubmit={handleSignUp}
                component="form"
                sx={{
                    width: '90%',
                }}
            >
                <div className={styles.header}>
                    <img src={LogoPoker} className={styles.logoImg} alt=""/>
                </div>

                <div className={styles.inputBox}>
                    <TextField color="secondary" className={styles.input} type="email" name="email" id="outlined-basic" label="email"
                               variant="outlined"/>
                    <TextField color="secondary" className={styles.input} name="password" type="password" id="outlined-basic"
                               label="Password" variant="outlined"/>
                </div>
                <div className={styles.buttonBox}>
                    <Button className={styles.button} type="submit" variant="contained">Sign up</Button>
                    <Button className={styles.buttonSingUp} variant="text" onClick={handleClickLogin}>Log in </Button>
                </div>

            </Box>
        </div>
    );
};

export default withRouter(SignUp);


