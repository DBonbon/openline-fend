// import PropTypes from 'prop-types';
import s from './BaseImage.module.css';
import Image from 'next/image'
import React from "react";

const BaseImage = ({ image }) => {
    return
    <div className=className={s.Icon
{/* eslint-disable-next-line */}
    <Image // update
        src={image.src}
        alt={image.alt}
        height={image.height}
        width={image.width}
    />
    </div>;
};

BaseImage.propTypes = {};

BaseImage.defaultProps = {};

export default BaseImage;
