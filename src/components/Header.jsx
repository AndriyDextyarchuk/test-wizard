import React, { useState } from 'react'
import classes from './Header.module.scss'
import {useSelector} from 'react-redux'

export const Header = () => {
    const path = useSelector(state => state.path)
    const steps = [
        {name: 'contacts', id: 1, path: '/'},
        {name: 'address', id: 2, path: '/step2'},
        {name: 'categories', id: 3, path: '/step3'},
        {name: 'success', id: 4, path: '/step4'},
    ]

    return(
        <header className={classes.header}>
            <ol className={classes.header__bar}>
                {steps.map(i =>
                    <li key={i.id} className={i.path === path ? classes.bar_item && classes.active : classes.bar_item}>
                        {`${i.name}`} 
                    </li>
                )}
            </ol>
        </header>
        

    )
}