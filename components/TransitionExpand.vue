<template>
	<div class="transition-expand" :aria-hidden="!active" :style="expandStyle">
		<div ref="content" class="expand-content">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	active: boolean;
}

const props = defineProps<Props>();

const content = ref<null | { clientHeight: null }>(null);

let expandStyle = { height: `0px` };

onMounted(() => {
	const clientHeight = ref(content.value?.clientHeight);

	watch(
		() => props.active,
		(active) => {
			expandStyle = {
				height: active === true ? `${clientHeight.value}px` : `0px`,
			};
		}
	);
});
</script>

<style lang="scss">
.transition-expand {
	height: 0;
	overflow: hidden;
	transition: height 0.3s ease-in-out;
	will-change: height;
}
</style>
