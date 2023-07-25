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
    .table-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .table-column-selected {
        background-color: rgb(244, 240, 253);
    }

    .field-name {
        inline-size: 150px;
        overflow-wrap: break-word;
        width: 50%;
        color: #333;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 500;
    }

    .field-type {
        inline-size: 150px;
        overflow-wrap: break-word;
        width: 40%;
        color: #858585;
        font-weight: 500;
    }
</style>
