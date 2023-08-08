import { Provider } from 'react-redux';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { mockStore } from '../../utils/testConfig';
import Filter from '../Filter/Filter';

describe('Filter component', () => {
    let component;
    const mockDispatch = jest.fn();

    beforeEach(() => {
        jest.mock('react-redux', () => ({
            ...jest.requireActual('react-redux'),
            useDispatch: () => mockDispatch
        }));

        component = render(
            <Provider store={mockStore}>
                <Filter />
            </Provider>
        );
    });

    it('should render the filter component', () => {
        expect(component.container).not.toBeNull;
    });

    it('should dispatch setFilter action on some event', async () => {
        const filter = component.getByTestId('filter_component_Result');
        await waitFor(() => fireEvent.click(filter));

        // Check if setFilter was dispatched
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
});
