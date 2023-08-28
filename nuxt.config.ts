import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	modules: ['@pinia/nuxt'],

	vite: {
		plugins: [
			eslintPlugin({
				emitWarning: true,
				emitError: true,
			}),
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/style/index.scss" as *;',
				},
			},
		},
	},
});
