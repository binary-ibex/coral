import { writable } from "svelte/store";
import { Column } from "./column";

export class Table {
	constructor(name) {
		this.name = name;
		this.position = { left: 0, top: 0 };
		this.tableElement = null;
		this.columns = [];
		this._store = writable(this);
	}


	addColumn() {
		let column = new Column("Column " + (this.columns.length + 1));
		this.columns.push(column);
		this._store.set(this);
	}

	removeColumn(column) {
		this.columns = this.columns.filter(c => c !== column);
		this._store.set(this);
	}

    setName(name) {
        this.name = name;
        this._store.set(this);
    }

    setTableElement(tableElement) {
        this.tableElement = tableElement;
        this._store.set(this);
    }

	subscribe(subscriber) {
		return this._store.subscribe(subscriber);
	}

}
