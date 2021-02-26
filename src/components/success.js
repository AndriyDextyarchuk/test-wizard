import React from 'react'
import classes from './success.module.scss'


export const Success = () => {
    return (
        <section className={classes.container}>
            <h1>Succes</h1>
            <article className={classes.container}>
                <h5>Your account was successfuly registrated.</h5>
                <h5>Please wait for account approval.</h5>
                <h5>It can take up to 24 hours.</h5>
            </article>
            <article className={classes.container}>
                <p>Have questions?</p>
                <p>Contact <span>info@site.com</span></p>
            </article>
        </section>
    )
}