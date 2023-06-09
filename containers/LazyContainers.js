import dynamic from 'next/dynamic';

export default {
    ArticlePage: dynamic(() => import('./ArticlePage')),
    BasePage: dynamic(() => import('./BasePage')),
    HomePage: dynamic(() => import('./HomePage')),
    NotFoundPage: dynamic(() => import('./NotFoundPage')),
    PasswordProtectedPage: dynamic(() => import('./PasswordProtectedPage')),
    PureHtmlPage: dynamic(() => import('./PureHtmlPage')),
    AboutPage: dynamic(() => import('./AboutPage')),
    CardsPage: dynamic(() => import('./CardsPage')),
    AuthorPage: dynamic(() => import('./AuthorPage')),
    GamePage: dynamic(() => import('./GamePage')),
    LayoutPage: dynamic(() => import('./LayoutPage')),
};
