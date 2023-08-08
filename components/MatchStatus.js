import React from 'react'
import ProgressCircle from './Progress/ProgressCircle';

const MatchStatus = ({matchstatusdata}) => {

    const returnStatus = () => {
        switch (matchstatusdata) {
            case 'FT':
                return  <ProgressCircle minute={90} text={'FT'}/>
            case 'HT':
                return <ProgressCircle minute={45} text={'HT'}/>
            case '-':
                return <ProgressCircle minute={0}/>
            case 'Canceled':
                return <ProgressCircle minute={0}/>
            default:
                return (
                    <ProgressCircle minute={matchstatusdata} hasText={false} />
                )
        }
    }

    return returnStatus();
}

export default MatchStatus;
