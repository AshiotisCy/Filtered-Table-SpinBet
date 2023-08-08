import * as redux from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const mockDispatchFn = jest.fn();
useDispatchSpy.mockReturnValue(mockDispatchFn);