import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const isRequesting = ref(false);
  const error = ref(null);

  const load = async () => {
    isRequesting.value = true;
    try {
      let resp = await fetch("http://localhost:3000/posts");
      if (!resp.ok) {
        throw Error("no data available");
      } else {
        posts.value = await resp.json();
        isRequesting.value = false;
      }
    } catch (err) {
      isRequesting.value = false;
      error.value = err.message;
      console.error("Posts Request Error:", error.value);
    }
  };

  return { posts, error, load, isRequesting };
};

export default getPosts;
