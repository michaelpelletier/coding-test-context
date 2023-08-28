import clientData from '../clients.json';
import { Client } from '~/types/client';
import { SelectOption } from '~/types/select-option';

interface Clients extends Array<Client> {}

export default eventHandler((event) => {
	if (event.node.req.method === 'GET') {
		const allClientData: Clients = clientData;

		// Remove nulls
		const clients = allClientData.filter((a) => a.nationality != null);

		// Turn into an array of objects.
		let nationObjects = clients.map((client) => {
			return <SelectOption>{
				label: client.nationality,
				value: client.nationality,
			};
		});

		// Sort and remove duplicates
		nationObjects = [...new Set(nationObjects)].sort((a, b) => {
			return a.value.localeCompare(b.value);
		});

		// Add Any option
		const anyNation = <SelectOption>{
			label: 'Any Nationality',
			value: 'any',
		};
		nationObjects.splice(0, 0, anyNation);

		return nationObjects;
	}
});
