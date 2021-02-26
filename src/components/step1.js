import React from 'react'
import {useHistory} from 'react-router-dom'

export const Step1 = () => {
    const history = useHistory()
    return (
        <div>
            Step1
            <button onClick={() => history.push('/step2')}>Next</button>
        </div>
    )
}