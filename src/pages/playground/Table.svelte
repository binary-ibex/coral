<script>
    import TableColumn from "./TableColumn.svelte";

    import { onMount } from "svelte";
    import { schema } from "../../stores/schema";
    export let table;

    let xOffset, yOffset;
    let ix, iy;
    let selectionLocked = false;
    $: isTableSelected = $schema.selectedTable == table;
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
    class={"table-box" + " " + (isTableSelected == true?"table-box-selected":"")}
    on:mousedown={(e) => handleMouseDown(e)}
    on:click={handelTableSelection}
    on:keydown={handelTableSelection}
    bind:this={table.table}
>
    <div class="table-name" style="--backcolor:{$table.color}">
        {$table.name}
    </div>
    <div class="table-body">
        {#each $table.columns as col}
            <TableColumn column={col} {table} />
        {/each}
    </div>
</div>

<style>
    .table-name {
        background-color: var(--backcolor);
        text-align: center;
        padding: 10px;
        color: rgb(37, 34, 83);
        font-weight: bold;
    }
    .table-box {
        display: flex;
        flex-direction: column;
        width: 300px;
        position: absolute;
        user-select: none;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        overflow: hidden;
        z-index: 2;
    }

    .table-box-selected {
        border:2px solid rgb(169, 32, 182); 
    }
</style>
