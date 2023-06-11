<script>
    import TableColumn from "./TableColumn.svelte";

    import { onMount } from "svelte";
    import { schema } from "../../stores/schema";
    export let table;

    let xOffset, yOffset;
    let ix, iy;
    let selectionLocked = false;
    let isTableSelected = $schema.selectedTable == table;
    let isTableDragged = false;

    function handelTableSelection(e) {
        if (ix == e.clientX && iy == e.clientY) {
            e.stopPropagation();
            schema.setSelectedTable(table);
        }
    }

    function lockSelection(event) {
        selectionLocked = true;
        ix = event.clientX;
        iy = event.clientY;
        xOffset = event.clientX - table.table.offsetLeft;
        yOffset = event.clientY - table.table.offsetTop;
    }

    function handleMouseDown(event) {
        lockSelection(event);
    }

    function handelMouseUp(event) {
        isTableDragged = ix != event.clientX || iy != event.clientY;
        selectionLocked = false;
    }

    function handelMouseMove(event) {
        if (selectionLocked) {
            table.position.left = event.clientX - xOffset;
            table.position.top = event.clientY - yOffset;
            table.table.style.left = `${table.position.left}px`;
            table.table.style.top = `${table.position.top}px`;
        }
    }

    onMount(() => {
        table.table.style.left = table.position.left + "px";
        table.table.style.top = table.position.top + "px";
    });
</script>

<svelte:window on:mousemove={handelMouseMove} on:mouseup={handelMouseUp} />
<div
    class={"table-card" +
        (isTableSelected == true ? " table-card-selected" : "")}
    on:mousedown={(e) => handleMouseDown(e)}
    on:click={handelTableSelection}
    on:keydown={handelTableSelection}
    bind:this={table.table}
>
    <div
        style="--top-border-color: {$table.color}"
        class={"table-name" +
            (isTableSelected == true ? " table-name-selected" : "")}
    >
        <span>{$table.name}</span>
    </div>
    <div class="table-columns">
        {#each $table.columns as col}
            <TableColumn table={table} column={col} isTableDragged={isTableDragged}/>
        {/each}
    </div>
</div>

<style>
    .table-card {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 250px;
        max-width: 300px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        user-select: none;
        cursor: pointer;
        overflow: hidden;
    }

    .table-card-selected {
        border: 3px solid #5a67d8;
    }

    .table-columns {
        display: flex;
        flex-direction: column;
    }

    .table-name {
        display: inline-block;
        text-align: center;
        background-color: rgb(235, 244, 255);
        color: #614bcd;
        font-weight: 1000;
        font-size: 1.1em;
        border-left: 1px solid rgb(222, 229, 236);
        border-bottom: 1px solid rgb(222, 229, 236);
        border-right: 1px solid rgb(222, 229, 236);
        border-top: 10px solid var(--top-border-color);
        padding: 10px 0px;
    }
    .table-name-selected {
        border-left: 0px solid;
        border-right: 0px solid;
    }

    .table-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 0px;
    }

    .table-column:hover {
        background-color: rgb(245, 247, 250);
        border-radius: 5px;
    }
    .table-column:hover .field-name {
        color: rgb(94, 32, 94);
    }
    .table-column:hover .field-type {
        color: rgb(94, 32, 94);
    }

    .field-name {
        flex-grow: 1;
        text-align: left;
        color: rgb(91, 97, 126);
    }

    .field-type {
        text-align: right;
        color: rgb(178, 178, 178);
        padding-right: 10px;
    }

    .column-constrain {
        width: 25px;
    }
</style>
