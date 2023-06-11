import { writable } from "svelte/store";
import { Table } from "./table";


class Schema {
	constructor() {
		this.name = "Schema Name";
		this.tables = [];
		this.selectedTable = null;
		this.selectedColumn = null;
		this._store = writable(this);
	}


	addTable() {
		let name = "Table " + (this.tables.length + 1);
		let table = new Table(name);
		this.tables.push(table);
		this._store.set(this);
	}


	removeTable(table) {
		this.tables = this.tables.filter(t => t !== table);
		this._store.set(this);
	}


	setName(name) {
		this.name = name;
		this._store.set(this);
	}


	setSelectedColumn(column, table) {
		this.selectedColumn = column;
		this.selectedTable = table;
		this._store.set(this);
	}


	setSelectedTable(table) {
		this.selectedTable = table;
		this._store.set(this);
	}


	subscribe(subscriber) {
		return this._store.subscribe(subscriber);
	}
}

export let schema = new Schema();
