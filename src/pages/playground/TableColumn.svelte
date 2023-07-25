<script>
    import { schema } from "../../stores/schema";
    export let table;
    export let column;
    export let isTableDragged = false;

    $: isColumnSelected = $schema.selectedColumn == column;

    function handelColumnClick(e) {
        if (!isTableDragged) {
            e.stopPropagation();
            schema.setSelectedColumn(column, table);
        }
    }
</script>

<div
    class={"table-column" +
        " " +
        (isColumnSelected ? "table-column-selected" : "")}
    on:click={(e) => handelColumnClick(e)}
    on:keydown={(e) => handelColumnClick(e)}
>
    <div class="field-name">{column.name}</div>
    <div class="field-type">{$column.type}</div>
</div>

<style>
    .field-name,
    .field-type {
        max-width: 100px;
        padding: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #404a58;
    }

    .table-column {
        display: flex;
        justify-content: space-between;
    }

    .table-column-selected {
        background-color: rgb(244, 240, 253);
    }
</style>
