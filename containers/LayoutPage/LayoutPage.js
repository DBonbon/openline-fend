// import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './LayoutPage.module.css';
import PropTypes from 'prop-types';

const LayoutPage = () => {
    return <div className={s.Container}></div>;
};

export default basePageWrap(LayoutPage);
