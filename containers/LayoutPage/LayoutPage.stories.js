/* global module */

import React from 'react';
import LayoutPage from './LayoutPage';
import data from './LayoutPage.data';

const LayoutPageStory = {
    title: 'Containers/LayoutPage',
    component: LayoutPage,
};
export default LayoutPageStory;

export const LayoutPageWithData = () => <LayoutPage {...data} />;
export const LayoutPageWithoutData = () => <LayoutPage />;
