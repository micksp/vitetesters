import { ref } from "vue";
import axios from "axios";
const posts = ref([]);
const loading = ref(false);
const dummyVariable = ref("");
export default function usePosts() {
    const getPosts = async () => {
        loading.value = true;
        posts.value = await axios.get('/api/posts');
        loading.value = null;
    }

    return {
        dummyVariable,
        getPosts,
        loading,
        posts
    }
}
