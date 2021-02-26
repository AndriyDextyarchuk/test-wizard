import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {postContacts} from '../rootSlice.js'
import classes from './step1.module.scss'

export const Step1 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const contacts = useSelector(state => state.contacts)
    const {register, handleSubmit, errors, watch} = useForm({defaulValues: contacts})

    const onSubmit = (payload) => {
        dispatch(postContacts(payload))
        history.push('/step2')
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.step1}>
            <div className={classes.container}>
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email' 
                    type='email'
                    ref={register ({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                />
                {errors.email && errors.email.type === 'required' && <p>This field is required</p>}
                {errors.email && errors.email.type === 'pattern' && <p>Invalid email address</p>}
                <label htmlFor='password'>Password</label>
                <input 
                    id='password'
                    name='password'
                    type='password' 
                    ref={register ({required: true, minLength: 6})}
                />
                {errors.password && errors.password.type === 'required' && <p>This field is required</p>}
                {errors.password && errors.password.type === 'minLength' && <p>Password must have at least 6 characters</p>}
                <label htmlFor='passwordConfirm'>Password confirm</label>
                <input 
                    id='passwordConfirm'
                    name='passwordConfirm'
                    type='password' 
                    ref={register ({required: true, validate: value => value === watch('password')})}
                />
                {errors.passwordConfirm && errors.passwordConfirm.type === 'required' && <p>This field is required</p>}
                {errors.passwordConfirm && errors.passwordConfirm.type === 'validate' && <p>The passwords do not match</p>}
                <button className={classes.button}>Next</button>
            </div>
        </form>
    )
}