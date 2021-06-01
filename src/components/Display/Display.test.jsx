import { render } from '@testing-library/react';
import React from 'react';
import Display from './Display';

describe('Display', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Display {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Display')).toBeTruthy();
    });
});
