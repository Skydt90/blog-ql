<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-10">

        <h2 class="text-4xl">
            <router-link :to="{name: 'index'}" class="text-gray-600 hover:underline">All posts</router-link>
            <span class="text-gray-600">/</span> {{ user.name }}
        </h2>
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <post-list-item v-for="post in user.posts" :key="post.id" :post="post" class="mt-10"></post-list-item>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from "./post-list-item";

export default {
    components: {
        PostListItem
    },
    apollo: {
        user: {
            query: gql`
                query($id: ID!) {
                    user(id: $id) {
                        id
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            user {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables() {
                return {
                    id: this.$route.params.id
                };
            },
            error() {
                this.$router.push({ name: '404' });
            }
        }
    }
}


</script>

<style scoped>

</style>
