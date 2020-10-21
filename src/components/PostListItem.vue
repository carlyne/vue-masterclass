<template>
    <div class="post">
        <div class="user-info">
            <a href="#" class="user-name">{{ user.name }}</a>

            <a href="profile.html#profile-details">
                <img
                class="avatar-large"
                :src="user.avatar"
                alt=""
                />
            </a>

            <p class="desktop-only text-small">{{ userPostCount }}</p>
        </div>

        <div class="post-content">
            <div>
                {{ post.text }}
            </div>
        </div>

        <div class="post-date text-faded">
            <BaseDate :timestamp="post.publishedAt" />
            <!-- {{ humanFriendlyDate }} -->
        </div>
    </div>
</template>

<script>
import srcData from "@/data.json";


export default {
    name: "PostListItem",
    components: { BaseDate },

    props: {
        post: {
            required: true,
            type: Object
        }
    },

    computed: {
        user () {
            return srcData.users[this.post.userId];
        },

        userPostCount () {
            return Object.keys( this.user.posts).length;
        }

        /*humanFriendlyDate() {
            return moment.unix(this.post.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
        }*/
    }
};
</script>