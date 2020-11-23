import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ApolloClient from 'apollo-boost';
import Post from "./components/post";
import VueApollo from 'vue-apollo';
import PostList from "./components/post-list";
import TopicPostList from "./components/topic-post-list";
import UserPostList from "./components/user-post-list";
import NotFound from "./components/not-found";
import moment from "moment";

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.filter('timeAgo', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format('MMMM Do YYYY'));

const routes = [
    { path: '/', component: PostList, name: 'index' },
    { path: '/post/:id', component: Post, name: 'post' },
    { path: '/topics/:slug', component: TopicPostList, name: 'topic' },
    { path: '/users/:id', component: UserPostList, name: 'user' },
    { path: '*', component: NotFound, name: '404' }
];

const apolloClient = new ApolloClient({
    uri: 'http://blog-ql.local/graphql'
});

const apolloProvider = new VueApollo({
   defaultClient: apolloClient
});

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    apolloProvider
});
