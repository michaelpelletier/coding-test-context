import { createRouter, useBase } from 'h3';

const router = createRouter();

router
	.get(
		'/clients/',
		eventHandler(() => {
			return {
				clients: [],
			};
		})
	)
	.get(
		'/clients/:id',
		eventHandler((req) => {
			return {
				id: req.context.params?.id,
				client: {},
			};
		})
	);

export default useBase('/api', router.handler);
