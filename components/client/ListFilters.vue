<template>
	<div class="client-list-filters">
		<FormSelectInput
			:options="nationalities"
			@update-select="updateNationality"
		/>

		<FormSelectInput :options="titles" @update-select="updateTitle" />

		<div class="client-list-filter--button-wrapper">
			<button class="client-list-filter--button" @click="search">
				Search
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { SelectOption } from 'types/select-option';
import { useClientsStore } from '~/store/clients';

const { data: nationalities } = await useFetch('/api/nationalities');
const { data: titles } = await useFetch('/api/titles');

const clientFilters = useClientsStore();

const updateNationality = (option: SelectOption) => {
	clientFilters.nationality = option.value;
};

const updateTitle = (option: SelectOption) => {
	clientFilters.title = option.value;
};

const emit = defineEmits(['runSearch']);
const search = () => {
	emit('runSearch');
};
</script>

<style lang="scss">
.client-list-filters {
	align-items: center;
	background: $c-white;
	display: flex;
	justify-content: space-between;

	.form-select {
		flex-basis: calc(50% - 100px);
		flex-grow: 1;
		flex-shrink: 1;

		.form-select--selected {
			border-top: 0;
		}
	}

	.form-select:nth-child(2) .form-select--selected {
		border-left: 0;
		border-right: 0;
	}
}

.client-list-filter--button-wrapper {
	align-self: stretch;
	width: 100px;
}

.client-list-filter--button {
	@include button;
	border-radius: 0;
	height: 100%;
	width: 100%;
}
</style>
