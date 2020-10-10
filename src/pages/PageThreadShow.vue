<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="posts" />
    </div>
</template>

<script>
import srcData from "@/data.json";
import PostList from "@/components/PostList";

export default {
  name: "PageThreadShow",
  components: { PostList },

  props: {
      id: {
          required: true,
          type: String
      }
  },

  data () {
    return {
      thread: srcData.threads[this.id]
    };
  },

  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts);
      return Object.values(srcData.posts)
        .filter(post => postIds.includes(post['.key']));
    }
  }
};
</script>