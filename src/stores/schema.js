import { writable } from "svelte/store";

export let selectedTable = writable(null);

export let schema = writable({
	name: "Schema Name",
	tables: [
		{
			name: "Table 1",
			position: {
				top: 100,
				left: 100,
				width: 300,
				height: 300
			},
			columns: [
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "age",
					type: "SMALLINT"
				},
				{
					name: "is_deleted",
					type: "bool"
				},
				{
					name: "created_on",
					type: "bool"
				},
				{
					name: "updated_on",
					type: "bool"
				},
				{
					name: "employee_number",
					type: "INT"
				},
				
			],
			relations: []
		},
		{
			name: "Table 2",
			position: {
				top: 400,
				left: 700,
				width: 300,
				height: 157
			},
			columns: [
				{
					name: "name",
					type: "varchar"
				},
				{
					name: "age",
					type: "SMALLINT"
				}
			]
		}
	]
});