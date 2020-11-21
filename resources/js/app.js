import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ApolloClient from 'apollo-boost';
import Post from "./components/post";
import VueApollo from 'vue-apollo';
import PostList from "./components/post-list";

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

const routes = [
    { path: '/', component: PostList, name: 'index' },
    { path: '/post/:id', component: Post, name: 'post' },
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
