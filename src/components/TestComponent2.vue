<template>
    <button :disabled="loading" @click="getPosts">Get posts</button>
  
    <p ># posts: {{ nrOfPosts }}</p>
    
    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        posts: null,
        loading: null
      }
    },
    methods: {
      async getPosts() {
        this.loading = true
  
        this.posts = await axios.get('/api/posts')
  
        this.loading = null
      }
    },
    computed: {
        nrOfPosts() {
            return !this.loading && this.posts != null ? this.posts.length : 0;
        }
    }
  }
  </script>