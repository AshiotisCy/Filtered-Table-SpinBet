import React from 'react'
import { statuses } from '../utils/commonVariables'
import MatchStatus from './MatchStatus';
import cx from 'classnames';
import useIsMobile from '../hooks/useIsMobile';
import moment from 'moment';

const SportsCard = ({sportData}) => {
    const statusCode = sportData?.status?.code;
    const statusType = sportData?.status?.type;
    const status = statuses[statusType];
    const isMobile = useIsMobile();
    const gameDate = moment(sportData.timestamp).format('MMM Do HH:mm')

    console.log('status',status);

    return (
        <div className={cx('sports-card-wrapper', {'sports-card-wrapper-mobile': isMobile})}>
            <div className='header'>
                <div className='country'>
                    {sportData?.country}
                </div>
                <div className='competition'>
                    {sportData?.competition}
                </div>
                <div className={statusType}>
                    { statusCode === 0 ?
                        <div>
                            {gameDate}
                        </div> :
                        status
                    }
                </div>
            </div>
            <div className='body'>
                <div className='home' data-testid='home'>
                    {sportData?.homeScore?.current ?? '0'}
                </div>
                <div className='separator'>-</div>
                <div className='away' data-testid='away'>
                    {sportData?.awayScore?.current ?? '0'}
                </div>
            </div>
            <div className='footer'>
                <div className='home-team'>
                    {sportData?.homeTeam?.name}
                </div>
                <MatchStatus matchstatusdata={sportData?.liveStatus}/>
                <div className='away-team'>
                    {sportData?.awayTeam?.name}
                </div>
            </div>
        </div>
    )
}

export default SportsCard