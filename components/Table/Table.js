import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import SportsCard from '../SportsCard';
import cx from 'classnames';
import { mobileTableHeaders, tableHeaders } from '../../utils/commonVariables';
import useIsMobile from '../../hooks/useIsMobile';

const Table = () => {
    const { filteredGames } = useSelector(state => state.games)
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGame, setSelectedGame] = useState({})
    const isMobile = useIsMobile();
    const itemsPerPage = 10;
    const totalRows = filteredGames?.length;
    const headers = isMobile ? mobileTableHeaders : tableHeaders
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        setCurrentPage(1)
    }, [filteredGames])

    // Generate sample data for the table
    // It worths to mention that in a real case scenario of course this is not the way to do it.
    // This functionality is only for demonstration purposes.
    const generateData = () => {
        const data = [];
        filteredGames?.map((game, index) => {
            data.push(
                <tr
                    data-testid={`row-modal-onClick-${index}`}
                    key={game.id}
                    onClick={() => {
                        handleRowClick(game)
                        handleOpenModal()
                    }}
                >
                    {!isMobile &&
                        <td>{index}</td>
                    }
                    <td>{game.name}</td>
                    <td className='score-cell'>{`${game.homeScore.current ?? 0} - ${game.awayScore.current ?? 0}`}</td>
                    {!isMobile &&
                        <td className='tag'>
                           <div className={`inner-tag ${game.status.type}`}>
                                {game.status.type}
                            </div>
                        </td>
                    }
                    <td>{game.liveStatus}</td>
                </tr>
            );
        })
        return data;
    };

    const handleNextButtonClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousButtonClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleRowClick = (rowGame) => {
        setSelectedGame(rowGame);
        console.log(rowGame);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedGame({});
    };

    return (
        <div className={cx('table-wrapper', {'table-wrapper-mobile': isMobile})}>
            <div className='table-component'>
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th className={header} key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{
                        generateData().slice(indexOfFirstItem, indexOfLastItem)}
                    </tbody>
                </table>
                <div className='table-footer'>
                    {currentPage > 1 && (
                        <button
                            className='previous'
                            onClick={handlePreviousButtonClick}
                            data-testid="previous_btn"
                        >
                            Previous
                        </button>
                    )}
                    {currentPage < Math.ceil(totalRows / itemsPerPage) && (
                        <button
                            className='next'
                            onClick={handleNextButtonClick}
                            data-testid="next_btn"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <SportsCard sportData={selectedGame} />
            </Modal>
        </div>
    );
};

export default Table;