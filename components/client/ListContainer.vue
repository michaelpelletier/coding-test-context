<template>
	<div>
		<ClientListFilters @run-search="runSearch" />

		<div v-if="!loading" class="client-results">
			<div class="client-results--header">
				{{ resultsText }}
			</div>

			<p v-if="clients.length === 0">
				No results. Try adjusting your filters.
			</p>

			<ul v-if="clients.length" class="client-list">
				<ClientListItem
					v-for="client in clients"
					:key="client.name"
					:client="client"
				/>
			</ul>
		</div>

		<p v-else>Loading...</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Client } from '~/types/client';
import { useClientsStore } from '~/store/clients';

const clientFilters = useClientsStore();

const clients = ref<Client[]>([]);
const loading = ref(true);
const resultsText = ref('');

const runSearch = async () => {
	loading.value = true;

	const params = {
		nationality: clientFilters.nationality || null,
		title: clientFilters.title || null,
	};

	const { pending, data } = await useFetch<Client[]>('/api/clients', {
		params,
	});

	loading.value = pending.value;

	if (data.value) {
		clients.value = data.value;
		if (data.value.length === 1) {
			resultsText.value = `${data.value.length} result found`;
		} else {
			resultsText.value = `${data.value.length} results found`;
		}
	}
};

onMounted(() => {
	runSearch();
});
</script>

<style lang="scss">
.client-list {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.client-results {
	border: 1px solid $c-blue-border;
	margin-top: 48px;

	p {
		margin: 0;
		padding: 24px;
	}
}

.client-results--header {
	border-bottom: 1px solid $c-blue-border;
	color: $c-blue-slate;
	font-size: 14px;
	font-weight: bold;
	padding: 24px;
}
</style>
