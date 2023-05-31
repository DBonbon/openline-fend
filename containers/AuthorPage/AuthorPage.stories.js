/* global module */

import React from 'react';
import AuthorPage from './AuthorPage';
import data from './AuthorPage.data';

const AuthorPageStory = {
    title: 'Containers/AuthorPage',
    component: AuthorPage,
};
export default AuthorPageStory;

export const AuthorPageWithData = () => <AuthorPage {...data} />;
export const AuthorPageWithoutData = () => <AuthorPage />;
