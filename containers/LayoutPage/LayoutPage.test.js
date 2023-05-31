import { render, /* screen */ } from '@testing-library/react';
import LayoutPage from './';
// import data from './LayoutPage.data';

describe('<LayoutPage />', () => {
    it('Renders an empty LayoutPage', () => {
        render(<LayoutPage />);
    });

    // it('Renders LayoutPage with data', () => {
    //     const { container } = render(<LayoutPage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
