import { useDispatch } from 'react-redux';
import Filter from '../components/Filter/Filter';
import Table from '../components/Table/Table';
import { setFilteredGames, setStoreGames } from '../redux/slices/gameSlice';
import dummyData from '../data/sports.json';
import { useEffect } from 'react';
import cx from 'classnames'
import useIsMobile from '../hooks/useIsMobile';

export default function Home() {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(setStoreGames(dummyData))
    dispatch(setFilteredGames(dummyData));
  }, []);

  return (
    <div className={cx('sports-wrapper', {'sports-wrapper-mobile': isMobile})}>
        <Filter />
        <Table />
    </div>
  )
}
