import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterData, filterStatuses } from '../../utils/commonVariables';
import { setFilter, setFilteredGames } from '../../redux/slices/gameSlice';
import cx from 'classnames'
import useIsMobile from '../../hooks/useIsMobile';

const Filter = () => {
    const { data, filter } = useSelector(state => state.games)
    const dispatch = useDispatch();
    const isMobile = useIsMobile();

    useEffect(() => {
        if (filter === 'all') {
            dispatch(setFilteredGames(data));
        } else {
            dispatch(setFilteredGames(data.filter(item => item.status.type === filter)));
        }
    },  [data, filter])

    const getFilterNumber = (filterKey) => {
        if (filterKey === 'All') {
            return data.length;
        }
        return data.filter(item => item.status.type === filterStatuses[filterKey]).length;
    }

    return (
        <div className={cx('filter-wrapper', {'filter-wrapper-mobile': isMobile})}>
            <div className='header'>
                Filters
            </div>
            <div className='body'>
                {filterData.map((filterItem) => (
                    <div
                        className={cx('body-wrapper', {'active': filter === filterItem.value })}
                        key={filterItem.key}
                        onClick={() => dispatch(setFilter(filterItem.value))}
                        data-testid={`filter_component_${filterItem.key}`}
                    >
                        <div className='filter'>
                            {filterItem.key}
                        </div>
                        <div className='value'>
                            {getFilterNumber(filterItem.key)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter
