import { ref } from "vue";

const getPost = (id) => {
  const post = ref([]);
  const isRequesting = ref(false);
  const error = ref(null);

  const load = async () => {
    isRequesting.value = true;
    try {
      let resp = await fetch(`http://localhost:3000/posts/${id}`);
      if (!resp.ok) {
        throw Error("no data available");
      } else {
        post.value = await resp.json();
        isRequesting.value = false;
      }
    } catch (err) {
      isRequesting.value = false;
      error.value = err.message;
      console.error("Post Request Error:", error.value);
    }
  };

  return { post, error, load, isRequesting };
};

export default getPost;
