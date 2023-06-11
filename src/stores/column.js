import { writable } from "svelte/store";


export class Column {
	constructor(name, type) {
		this.columnElement = null;
		this.name = name;
		this.type = type;
        this.relatedColumn = null;
		this._store = writable(this);
	}


    setName(name) {
        this.name = name;
        this._store.set(this);
    }

    setType(type) {
        this.type = type;
        this._store.set(this);
    }

    setColumnElement(columnElement) {
        this.columnElement = columnElement;
        this._store.set(this);
    }

    setRelatedColumn(column) {
        this.relatedColumn = column;
        this._store.set(this);
    }

    subscribe(subscriber) {
		return this._store.subscribe(subscriber);
	}
}