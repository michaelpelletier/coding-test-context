<template>
	<svg class="icon" :class="`icon--${size}`">
		<use :href="`#icon-${icon}`" />
	</svg>
</template>

<script setup lang="ts">
interface Props {
	icon: string;
	size?: string;
}

withDefaults(defineProps<Props>(), {
	size: 'medium',
});
</script>

<style lang="scss">
.icon {
	cursor: pointer;
	padding: 4px;
}

.icon--small {
	height: 16px;
	width: 16px;
}

.icon--medium {
	height: 20px;
	width: 20px;
}

.icon--logo {
	height: 84px;
	width: 84px;
}
</style>
