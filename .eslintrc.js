module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
	},
};
