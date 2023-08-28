<template>
	<div class="form-select" @blur.capture="handleBlur">
		<button
			class="form-select--selected"
			:class="{ open: open }"
			aria-haspopup="listbox"
			:aria-expanded="open"
			@click="toggleDropdown"
			@keydown.enter.prevent="toggleDropdown"
			@keydown.esc.prevent="closeDropdown"
			@keydown.up.prevent="selectPrevOption"
			@keydown.down.prevent="selectNextOption"
		>
			{{ selected.label }}
			<AppIcon class="chevron" icon="chevron" size="medium" />
		</button>
		<ul
			class="form-select--options"
			:class="{ 'form-select--hidden': !open }"
			tabindex="-1"
			role="listbox"
		>
			<li
				v-for="option of options"
				:key="option.value"
				class="form-select--option"
				:class="{ 'has-focus': selected === option }"
				:aria-selected="selected === option"
				role="option"
				@click="clickSelectOption(option)"
			>
				{{ option.label }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SelectOption } from 'types/select-option';

interface Props {
	options: Array<SelectOption>;
	default?: SelectOption;
}

const props = defineProps<Props>();

const selected = ref(
	props.default
		? props.default
		: props.options.length
		? props.options[0]
		: null
);

const open = ref(false);

const emit = defineEmits(['updateSelect']);

const highlightedOption = ref(props.options[0]);

const closeDropdown = () => {
	open.value = false;
};

const toggleDropdown = () => {
	open.value = !open.value;
};

const handleBlur = (e: FocusEvent) => {
	if (e.relatedTarget) {
		return;
	}

	closeDropdown();
};

const selectPrevOption = (e: Event) => {
	e.preventDefault();
	const index = props.options.indexOf(highlightedOption.value);
	if (index === 0) {
		highlightedOption.value = props.options[props.options.length - 1];
	} else {
		highlightedOption.value = props.options[index - 1];
	}
	selectOption(highlightedOption.value);
};

const selectNextOption = (e: Event) => {
	e.preventDefault();
	const index = props.options.indexOf(highlightedOption.value);
	if (index === props.options.length - 1) {
		highlightedOption.value = props.options[0];
	} else {
		highlightedOption.value = props.options[index + 1];
	}
	selectOption(highlightedOption.value);
};

const selectOption = (option: SelectOption) => {
	selected.value = option;
	emit('updateSelect', option);
};

const clickSelectOption = (option: SelectOption) => {
	selectOption(option);
	highlightedOption.value = option;
	open.value = false;
};
</script>

<style lang="scss">
.form-select {
	position: relative;
	width: 100%;
	text-align: left;
	outline: none;
	height: 60px;
	line-height: 60px;
}

.form-select--selected {
	align-items: center;
	background-color: $c-white;
	border: 1px solid $c-blue-border;
	color: $c-black;
	cursor: pointer;
	display: flex;
	height: 100%;
	justify-content: space-between;
	padding: 0 20px;
	position: relative;
	transition:
		background-color 0.3s ease-in-out,
		color 0.3s ease-in-out;
	width: 100%;
	will-change: background-color, color;

	&.open,
	&:hover {
		background-color: $c-black;
		color: $c-white;

		.chevron {
			fill: $c-white;
		}
	}

	.chevron {
		transition: fill 0.3s ease-in-out;
		transform: rotate(90deg);
		will-change: fill;
	}
}

.form-select--options {
	background: $c-black;
	border: 1px solid $c-blue-border;
	border-top: 0;
	left: 0;
	list-style-type: none;
	margin: 0;
	padding: 0;
	position: absolute;
	right: 0;
	top: 60px;
	z-index: 1;

	&.form-select--hidden {
		display: none;
	}
}

.form-select--option {
	color: $c-white;
	cursor: pointer;
	padding: 0 20px;

	&.has-focus,
	&:hover {
		background-color: $c-spot;
		color: $c-white;
	}
}
</style>
