import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dirs: ['./components'],
		}),
		AutoImport({
			imports: ['vue', 'vitest', 'pinia'],
			dirs: ['./store'],
			dts: true,
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		css: {
			modules: {
				classNameStrategy: 'non-scoped',
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname),
			'~': path.resolve(__dirname),
		},
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag) =>
				['AppIcon', 'TransitionExpand', 'UserAvatar'].includes(tag),
		},
	},
});
