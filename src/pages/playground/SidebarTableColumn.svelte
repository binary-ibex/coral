<script>
    import { schema } from "../../stores/schema";
    
    export let column;
    export let table;


    function handleColumnNameInput(event, column) {
        event.stopPropagation();
        column.setName(event.target.value);
    }

    function handleColumnTypeInput(event, column) {
        event.stopPropagation();
        column.setType(event.target.value);
    }

    function handelColumnClick(event, col) {
        event.stopPropagation();
        schema.setSelectedColumn(col, table);
    }

</script>

<div
    on:click={(e) => handelColumnClick(e, column)}
    on:keydown={(e) => handelColumnClick(e, column)}
    class={"sidebar-table-column" +
        ($schema.selectedColumn == column
            ? " sidebar-table-column-selected"
            : "")}
>
    <input
        class="sidebar-table-field-name"
        type="text"
        value={$column.name}
        on:input={(e) => handleColumnNameInput(e, column)}
    />

    <input
        class="sidebar-table-field-type"
        type="text"
        value={$column.type}
        on:input={(e) => handleColumnTypeInput(e, column)}
    />

    

</div>

<style>

    .sidebar-table-column {
        display: flex;
        flex-direction: row;
        padding: 8px 4px 8px 4px;
    }

    .sidebar-table-column-selected {
        background-color: #f0efef;
    }

    .sidebar-table-field-name {
        width: 40%;
        padding: 6px;
        margin-left: 10px;
        border: 1px solid #e2e8f0;
        border-radius: 5px;
        outline: none;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .sidebar-table-field-type {
        width: 30%;
        padding: 6px;
        margin-left: 10px;
        border: 1px solid #e2e8f0;
        border-radius: 5px;
        outline: none;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    input[type="text"]:focus {
        outline: 2px solid #42b8a6;
    }

    .sidebar-table-field-constraints {
        width: 30%;
        display: flex;
        align-items: center;
        margin-left: 10px;
        align-items: stretch;
    }
</style>
