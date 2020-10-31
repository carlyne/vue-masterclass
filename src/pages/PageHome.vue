<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ForumList :forums="forums"></ForumList>
  </div>
</template>

<script>
import srcData from "@/data.json";
import ForumList from "@/components/ForumList";

export default {
  name: "PageHome",
  components: { ForumList },

  data() {
    return {
      forums: Object.values(srcData.forums),
      posts: srcData.posts,
      users: srcData.users,
    };
  },
};
</script>