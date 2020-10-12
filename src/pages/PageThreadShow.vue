<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="posts" />

      <form v-on:submit.prevent="addPost">
        <div class="form-group">
          <textarea 
            cols="30" 
            rows="10"
            class="form-group"
            v-model="newPostText"
          ></textarea>
        </div>

        <div class="form-action">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
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
      thread: srcData.threads[this.id],
      newPostText: ''
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
    addPost() {
      const postId = 'great post' + Math.random();

      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
        ".key": postId
      };

      this.$set(srcData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(srcData.users[post.userId].posts, postId, postId);

      this.newPostText = '';
    }
  }
};
</script>