import { render, /* screen */ } from '@testing-library/react';
import AuthorPage from './';
// import data from './AuthorPage.data';

describe('<AuthorPage />', () => {
    it('Renders an empty AuthorPage', () => {
        render(<AuthorPage />);
    });

    // it('Renders AuthorPage with data', () => {
    //     const { container } = render(<AuthorPage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
