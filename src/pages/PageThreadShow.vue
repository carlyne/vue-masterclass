<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="posts" />
      <PostEditor 
        @save="addPost"
        :threadId="id"
      />
    </div>
</template>

<script>
import srcData from "@/data.json";
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";

export default {
  name: "PageThreadShow",
  components: { PostList, PostEditor },

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
  },

  methods: {
    addPost({post}) { 
      const postId = post['.key'];

      this.$set(srcData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(srcData.users[post.userId].posts, postId, postId);
    }
  }
};
</script>