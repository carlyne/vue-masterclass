<template>
	<div class="forum-list">
		<h2 class="list-title">
			<router-link :to="{ name: 'PageCategory', params: { id: category['.key'] } }">
				{{ category.name }}
			</router-link>
		</h2>

		<ForumList :forums="categoryForums" />
	</div>
</template>

<script>
import ForumList from './ForumList';
import srcDate from '@/data.json';

export default {
	name: "CategoryListItem",
	components : { ForumList },

	props: {
		category: {
			required: true,
			type: Object
		}
	},

	computed: {
		categoryForums() {
			return Object.values(srcDate.forums)
			.filter(forum => forum.categoryId === this.category['.key']);
		}
	}
}
</script>