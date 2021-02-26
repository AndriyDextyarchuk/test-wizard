import React from 'react'
import {useHistory} from 'react-router-dom'

export const Step3 = () => {
    const history = useHistory()
    return (
        <div>
            Step3
            <button onClick={() => history.push('/step4')}>Next</button>
        </div>
    )
}