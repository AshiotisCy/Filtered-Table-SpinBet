import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchStatus from '../MatchStatus';
import ProgressCircle from '../Progress/ProgressCircle';

// Mocking ProgressCircle to check for passed props
jest.mock('../Progress/ProgressCircle', () => {
    return jest.fn((props) => <div {...props}>Mocked ProgressCircle</div>);
});

describe('MatchStatus component', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should render ProgressCircle with minute 90 and text FT for FT', () => {
        render(<MatchStatus matchstatusdata="FT" />);
        expect(ProgressCircle).toHaveBeenCalledWith({ minute: 90, text: 'FT' }, expect.anything());
    });

    it('should render ProgressCircle with minute 45 and text HT for HT', () => {
        render(<MatchStatus matchstatusdata="HT" />);
        expect(ProgressCircle).toHaveBeenCalledWith({ minute: 45, text: 'HT' }, expect.anything());
    });

    it('should render ProgressCircle with minute 0 for "-"', () => {
        render(<MatchStatus matchstatusdata="-" />);
        expect(ProgressCircle).toHaveBeenCalledWith({ minute: 0 }, expect.anything());
    });

    it('should render ProgressCircle with minute 0 for "Canceled"', () => {
        render(<MatchStatus matchstatusdata="Canceled" />);
        expect(ProgressCircle).toHaveBeenCalledWith({ minute: 0 }, expect.anything());
    });

    it('should render ProgressCircle with passed minute and no text for any other status', () => {
        render(<MatchStatus matchstatusdata={30} />);
        expect(ProgressCircle).toHaveBeenCalledWith({ minute: 30, hasText: false }, expect.anything());
    });
});
