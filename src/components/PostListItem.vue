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

        <div class="post-date text-faded"
            :title="post.publishedAt | humanFriendlyDate">
            <!-- {{ humanFriendlyDate }} -->
            {{ post.publishedAt | diffForHumans }}
        </div>
    </div>
</template>

<script>
import srcData from "@/data.json";
import moment from 'moment';

export default {
    name: "PostListItem",

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
    },

    filters: {
        humanFriendlyDate(date) {
            return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a');
        },

        diffForHumans(date) {
            return moment.unix(date).fromNow()
        }
    }
};
</script>