import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {postAddress} from '../rootSlice.js'
import classes from './step2.module.scss'

export const Step2 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const address = useSelector(state => state.address)
    const {register, handleSubmit, errors} = useForm({defaultValues: address})

    const onSubmit = (data) => {
        dispatch (postAddress(data))
        history.push('/step3')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.step2}>
            <div className={classes.container}>
                <label htmlFor="country">Country</label>
                <input 
                    id='country'
                    name='country' 
                    type='country'
                    ref={register ({required: true})}
                />
                {errors.country && errors.country.type === 'required' && <p>This field is required</p>}
                <label htmlFor='city'>City</label>
                <input 
                    id='city'
                    name='city' 
                    type='text'
                    ref={register ({required: true})}
                />
                {errors.city && errors.city.type === 'required' && <p>This field is required</p>}
                <label htmlFor='address'>Address</label>
                <input 
                    id='address'
                    name='address' 
                    type='text'
                    ref={register ({required: true})}
                />
                {errors.address && errors.address.type === 'required' && <p>This field is required</p>}
                <button className={classes.next}>Next</button>
            </div>
            <button className={classes.prev} onClick={() => history.push('/')}>Prev</button>
        </form>
    )
}