import Vue from 'vue';
import Vuex from 'vuex';
import SrcData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: SrcData,

    actions: {
        createPost(context, post) {
            const postId = 'greatPost' + Math.random();
            const threadId = post.threadId;
            const userId = post.userId;
            
            post['.key'] = postId;
            
            context.commit('setPost', { post, postId });
            context.commit('appendPostToThread', { threadId, postId });
            context.commit('appendPostToUser', {userId, postId});
        }
    },

    mutations: {
        setPost(state, { post, postId }){
            Vue.set(state.posts, postId, post);
        },

        appendPostToThead(state, { postId, threadId }){
            const thread = state.thread[threadId];
            Vue.set(thread.posts, postId, postId);
        },

        appendPostToUser(state, { postId, userId }){
            const user = state.users[userId];
            Vue.set(user.posts, postId, postId);
        }
    }
});