import { render, /* screen */ } from '@testing-library/react';
import BaseImage from './';
// import data from './BaseImage.data';

describe('<BaseImage />', () => {
    it('Renders an empty BaseImage', () => {
        render(<BaseImage />);
    });

    // it('Renders BaseImage with data', () => {
    //     const { container } = render(<BaseImage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
