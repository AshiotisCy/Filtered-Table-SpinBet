import React from 'react';
import { render, screen } from '@testing-library/react';
import SportsCard from '../SportsCard';
import useIsMobile from '../../hooks/useIsMobile';
import moment from 'moment';

jest.mock('../../hooks/useIsMobile');


describe('SportsCard component', () => {

    // Mock sample data for testing
    const mockSportData = {
        country: 'CountryName',
        competition: 'CompetitionName',
        status: {
            code: 100,
            type: "finished"
        },
        timestamp: Date.now(),
        homeScore: { current: 0 },
        awayScore: { current: 0 },
        homeTeam: { name: 'HomeTeamName' },
        awayTeam: { name: 'AwayTeamName' },
        liveStatus: 'Live'
    };

    beforeEach(() => {
        useIsMobile.mockReturnValue(false);
    });

    it('renders without crashing', () => {
        const component = render(<SportsCard sportData={mockSportData} />);
        expect(component.container).not.toBeNull;
    });

    it('displays the correct country and competition', () => {
        render(<SportsCard sportData={mockSportData} />);
        expect(screen.queryByText('CountryName')).not.toBeNull();
        expect(screen.queryByText('CompetitionName')).not.toBeNull();
    });

    it('displays the correct game date if statusCode is 0', () => {
        const modifiedData = { ...mockSportData, status: { ...mockSportData.status, code: 0 } };
        render(<SportsCard sportData={modifiedData} />);
        const gameDate = moment(modifiedData.timestamp).format('MMM Do HH:mm');
        expect(screen.queryByText(gameDate)).not.toBeNull();
    });

    it('displays the correct data if homeScore is undefined', () => {
        const modifiedData = { ...mockSportData, homeScore: {}, awayScore: {} };
        const component = render(<SportsCard sportData={modifiedData} />);
        const home = component.getByTestId('home');
        const away = component.getByTestId('away');
        expect(home.textContent).toBe('0');
        expect(away.textContent).toBe('0');
    });

});
