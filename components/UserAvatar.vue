<template>
	<figure class="user-avatar" :class="`user-avatar--${size}`">
		<img :src="src" />
	</figure>
</template>

<script setup lang="ts">
interface Props {
	src: string;
	size?: string;
}

withDefaults(defineProps<Props>(), {
	size: 'medium',
});
</script>

<style lang="scss">
.user-avatar {
	margin: 0 auto;

	img {
		height: 100%;
		width: 100%;
	}
}

.user-avatar--lg {
	height: 128px;
	width: 128px;
}
</style>
