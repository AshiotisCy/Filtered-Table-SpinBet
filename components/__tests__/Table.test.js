import React from 'react';
import { fireEvent, render, waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mobileTableHeaders, tableHeaders } from '../../utils/commonVariables';
import Table from '../Table/Table';
import useIsMobile from '../../hooks/useIsMobile';
import dummyData from '../../data/sports.json';

jest.mock('../../hooks/useIsMobile.js');

const mockStore = configureMockStore();

const store = mockStore({
    games: {
      filteredGames: dummyData
    }
  });

  const props = {
    tableHeaders,
    mobileTableHeaders,
    currentPage: 2
  }

  describe('Table Component', () => {
    let component;
    beforeEach(() => {
        useIsMobile.mockReturnValue(false);

        component = render(
            <Provider store={store}>
                <Table {...props} />
            </Provider>
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly for non-mobile', () => {
      expect(component.queryByText('Game')).not.toBeNull;
    });

    it('renders table headers for mobile view', () => {
        useIsMobile.mockReturnValue(true);
        expect(component.queryByText('Game')).not.toBeNull;
    });

    it('opens modal when a row is clicked', () => {
        const rowClick = component.getByTestId('row-modal-onClick-1');
        fireEvent.click(rowClick);
        expect(component.queryByText('Game 1')).not.toBeNull;
    });

    it('should click next btn', () => {
        const nextBtn = component.getByTestId('next_btn');
        expect(fireEvent.click(nextBtn)).toHaveBeenCalled;
    });

    it('should click previous btn', async () => {
      const nextBtn = component.getByTestId('next_btn');
      await waitFor(() => fireEvent.click(nextBtn));
      const previousBtn = component.getByTestId('previous_btn');
      expect(fireEvent.click(previousBtn)).toHaveBeenCalled;
    });

    it('should click the close modal btn', async () => {
      const rowClick = component.getByTestId('row-modal-onClick-1');
      await waitFor(() => fireEvent.click(rowClick));
      const closeBtn = component.getByTestId('modal_close_btn');
      expect(fireEvent.click(closeBtn)).toHaveBeenCalled;
    });
});
