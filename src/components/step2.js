import React from 'react'
import {useHistory} from 'react-router-dom'

export const Step2 = () => {
    const history = useHistory()
    return (
        <div>
            Step2
            <button onClick={() => history.push('/step3')}>Next</button>
        </div>
    )
}