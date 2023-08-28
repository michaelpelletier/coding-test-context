<template>
	<li
		class="client-list-item"
		:class="{ 'client-list-item--open': isActive }"
		@click="toggleActive()"
	>
		<div class="client-list-item--avatar">
			<UserAvatar size="lg" :src="client.avatar" />
		</div>
		<div class="client-list-item--basics">
			<div class="client-list-item--name">{{ client.name }}</div>
			<div class="client-list-item--title">{{ client.title }}</div>
			<div class="client-list-item--controls">
				<AppIcon
					icon="chevron"
					class="chevron"
					:class="{ 'chevron--active': isActive }"
				/>
			</div>
		</div>
		<div class="client-list-item--details">
			<TransitionExpand :active="isActive">
				<ul>
					<li v-if="client.nationality">
						<strong>Nationality:</strong> {{ client.nationality }}
					</li>
					<li v-if="client.quote">
						<strong>Quote:</strong> {{ client.quote }}
					</li>
				</ul>
			</TransitionExpand>
		</div>
	</li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Client } from '~/types/client';

interface Props {
	client: Client;
}

defineProps<Props>();

const isActive = ref(false);
const toggleActive = () => {
	isActive.value = !isActive.value;
};
</script>

<style lang="scss">
.client-list-item {
	background: $c-white;
	border-bottom: 1px solid $c-blue-border;
	cursor: pointer;
	display: grid;
	grid-template-columns: 150px 1fr;
	grid-template-rows: auto 1fr;
	grid-column-gap: 8px;
	grid-row-gap: 8px;
	padding-bottom: 8px;

	&:last-of-type {
		border-bottom: 0;
	}
}

.client-list-item--avatar {
	grid-area: 1 / 1 / 3 / 2;

	flex-grow: 0;
	flex-shrink: 0;
	width: 150px;
}

.client-list-item--basics {
	align-items: center;
	grid-area: 1 / 2 / 2 / 3;
	padding: 20px;

	column-gap: 8px;
	display: flex;
	// width: calc(100% - 24px);

	.client-list-item--name {
		flex-basis: calc(50% - 300px);
		flex-grow: 1;
		flex-shrink: 1;
	}

	.client-list-item--title {
		flex-basis: calc(50% - 300px);
		flex-grow: 1;
		flex-shrink: 1;
	}

	.client-list-item--controls {
		align-content: center;
		display: flex;
		flex-grow: 0;
		flex-shrink: 0;
		justify-content: center;
		width: 50px;
	}
}

.client-list-item--details {
	grid-area: 2 / 2 / 3 / 3;
	padding: 0 20px 20px 20px;

	ul {
		margin: 0;
		padding-left: 16px;
	}
}

.chevron {
	transition: transform 0.4s ease-in-out;
	will-change: transform;
}

.chevron--active {
	transform: rotate(90deg);
}
</style>
