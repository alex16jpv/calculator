import { render } from '@testing-library/react';
import React from 'react';
import Keypad from './Keypad';

describe('Keypad', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Keypad {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Keypad')).toBeTruthy();
    });
});
