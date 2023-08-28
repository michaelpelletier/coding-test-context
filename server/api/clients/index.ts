import clientData from '../clients.json';
import { Client } from '~/types/client';

export default eventHandler((event) => {
	if (event.node.req.method === 'GET') {
		const allClients: Client[] = clientData;
		let usableClients = allClients;

		// Query Params
		const query = getQuery(event);

		if (query.title !== 'any') {
			usableClients = usableClients.filter((a) => {
				return a.title === query.title;
			});
		}
		if (query.nationality !== 'any') {
			usableClients = usableClients.filter((a) => {
				return a.nationality === query.nationality;
			});
		}

		return usableClients.sort((a, b) => {
			return a.name > b.name ? 1 : -1;
		});
	}
	if (event.node.req.method === 'POST') {
		// create a client
	}
});
