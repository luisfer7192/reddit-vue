import Home from './components/Home'

export const routes = [
    {
        path: '', name: 'home',
        components: {
            default: Home
        }
    },
    // you can add more routes for example
    // {
    //     path: '/reddit', name: 'redditView',
    //     components: {
    //         default: RedditView, // component
    //         'header-top': Header // header component if you need one
    //     }
    // },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
]