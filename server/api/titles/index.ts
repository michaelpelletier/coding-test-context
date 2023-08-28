import clientData from '../clients.json';
import { Client } from '~/types/client';
import { SelectOption } from '~/types/select-option';

interface Clients extends Array<Client> {}

export default eventHandler((event) => {
	if (event.node.req.method === 'GET') {
		const allClientData: Clients = clientData;

		// Remove nulls
		const clients = allClientData.filter((a) => a.title != null);

		// Turn into an array of objects.
		let titleObjects = clients.map((client) => {
			return <SelectOption>{
				label: client.title,
				value: client.title,
			};
		});

		// Sort and remove duplicates
		titleObjects = [...new Set(titleObjects)].sort((a, b) => {
			return a.value.localeCompare(b.value);
		});

		// Add Any option
		const anyTitle = <SelectOption>{
			label: 'Any Title',
			value: 'any',
		};
		titleObjects.splice(0, 0, anyTitle);

		return titleObjects;
	}
});
