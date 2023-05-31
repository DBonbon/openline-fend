// import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './AuthorPage.module.css';

const AuthorPage = () => {
    return <div className={s.Root}>AuthorPage</div>;
};

export default basePageWrap(AuthorPage);
