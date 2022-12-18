<template>
    <button :disabled="loading" @click="getPosts">Get posts</button>
    <button @click="setDummyVariable">Set Dummy Variable</button>
    <p># posts: {{ nrOfPosts }} - {{ dummyVariable }}</p>
    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul v-else>
        <li v-for="post in posts" :key="post.id" data-test="post">
            {{ post.title }}
        </li>
    </ul>
</template>

<script setup>
import { computed, onMounted } from "vue";
import usePosts from "../composables/usePosts.js";
const { dummyVariable, getPosts, loading, posts } = usePosts();

onMounted(() => getPosts);
const nrOfPosts = computed(() => {
    return !loading.value && posts.value != null ? posts.value.length : 0;
});

// there's no test for this function to make sure I get other than 100% in coverage
const setDummyVariable = () => {
    dummyVariable.value = "TEST in progress...";
};
</script>
