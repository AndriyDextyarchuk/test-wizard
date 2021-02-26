import React, {Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {postCategories} from '../rootSlice.js'
import classes from './step3.module.scss'

export const Step3 = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const categories = useSelector(state => state.categories)
    const {register, handleSubmit} = useForm({defaultValues: categories})

    const onSubmit = (data) => {
        dispatch (postCategories(data))
        history.push('/step4')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.step3}> 
                <div className={classes.container}>
                    <label htmlFor="category1">Category1</label>
                    <select 
                        id='category1'
                        name='category1' 
                        ref={register}
                    >   
                        <option value="art">Art</option>
                        <option value="culture">Culture</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <label htmlFor="category2">Category2</label>
                    <select 
                        id='category2'
                        name='category2' 
                        ref={register}
                    >   
                        <option value="art">Art</option>
                        <option value="culture">Culture</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <label htmlFor="category3">Category3</label>
                    <select 
                        id='category3'
                        name='category3' 
                        ref={register}
                    >   
                        <option value="art">Art</option>
                        <option value="culture">Culture</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <button className={classes.next}>Next</button>
                </div>
                <button className={classes.prev} onClick={() => history.push('/step2')}>Prev</button>
            </form>
        </>
    )
}