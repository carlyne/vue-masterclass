<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>

      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId['.key']" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{ users[posts[postId].userId].name }}</a>

            <a href="profile.html#profile-details">
              <img
                class="avatar-large"
                :src="users[posts[postId].userId].avatar"
                alt=""
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
             {{ posts[postId].text }}
            </div>
          </div>

          <div class="post-date text-faded">{{ posts[postId].publishedAt }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import srcData from "../data.json";

export default {
  name: "PageThreadShow",

  props: {
      id: {
          retquired: true,
          type: String
      }
  },

  data() {
    return {
      thread: srcData.threads[this.id],
      posts: srcData.posts,
      users: srcData.users
    };
  }
};
</script>