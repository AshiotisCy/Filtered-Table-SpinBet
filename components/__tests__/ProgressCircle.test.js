import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressCircle from '../Progress/ProgressCircle';

describe('ProgressCircle component', () => {

    it('renders without crashing', () => {
        const component = render(<ProgressCircle minute={45} />);
        expect(component.container).not.toBeNull;
    });

    it('displays the given minute if hasText is false', () => {
        render(<ProgressCircle minute={45} hasText={false} />);
        expect(screen.queryByText("45 '")).not.toBeNull();
    });
});
