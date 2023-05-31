import React, { PureComponent } from 'react';

// import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './AboutPage.module.css';

class AboutPage extends PureComponent {
    state = {};

    static defaultProps = {
        companyName: '',
        image: '',
    };

    static propTypes = {
        companyName: PropTypes.string,
        image: PropTypes.static,
    };

    render() {
        const { companyName, image, seo } = this.props;
        return (
            <div className={s['AboutPage']}>
                <p>Company name: {companyName}</p>
                <p>Image: {image}</p>
                <p>ImageSRC: { image.src }</p>
                 <p>ImageURL: { image.full_url }</p>
                <img src={image.src} alt="BigCo Inc. logo"/>


            </div>
        );
    }
}

export default basePageWrap(AboutPage);
