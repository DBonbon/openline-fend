// import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './GamePage.module.css';
import RawHtml from '../../components/RawHtml';

const GamePage = ({ title, intro, cards, slug, language, min_recommended_age, max_recommended_age, POS, tags, categories, seo }) => {
    return <div className={s.Root}>
    <p>{title}</p>
    <p>{intro}</p>
    <p>{language}</p>
    <p>{min_recommended_age}</p>
    <p>{max_recommended_age}</p>
    <p>{POS}</p>
    <p>tags:{tags}</p>
    <p>categories:{categories}</p>
    <p>seo:{seo.seo_html_title}</p>


    </div>;
};

export default basePageWrap(GamePage);
