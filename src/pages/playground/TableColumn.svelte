<script>
    import { onMount } from "svelte";
    import { schema } from "../../stores/schema";
    export let table;
    export let column;
    export let isTableDragged = false;  

 
    function handelColumnClick(e) {
        if (!isTableDragged) {
            e.stopPropagation();
            schema.setSelectedColumn(column, table);
        }
    }

    onMount(() => {
        table.table.style.left = table.position.left + "px";
        table.table.style.top = table.position.top + "px";
    });
</script>

<div
    class="table-column"
    on:click={(e) => handelColumnClick(e)}
    on:keydown={(e) => handelColumnClick(e)}
>
    <div class="column-constrain" />
    <div class="field-name">{$column.name}</div>
    <div class="field-type">{$column.type}</div>
</div>

<style>
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
