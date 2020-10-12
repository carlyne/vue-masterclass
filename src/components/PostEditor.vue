<template>
    <form v-on:submit.prevent="save">

    <div class="form-group">
        <textarea 
        cols="30" 
        rows="10"
        class="form-group"
        v-model="text"
        ></textarea>
    </div>

    <div class="form-action">
        <button class="btn-blue">Submit post</button>
    </div>
    </form>
</template>

<script>
export default {
  name: "PostEditor",

  props: {
    threadId: {
      required: true
    }
  },

  data() {
      return {
          text: ''
      }
  },

  methods: {
    save() {
      const postId = 'great post' + Math.random();

      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
        ".key": postId
      };

      this.text = '';

      this.$emit('save', { post });
    }
  }
};
</script>