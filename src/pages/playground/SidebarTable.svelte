<script>
    import { selectedTable, selectedColumn, schema } from "../../stores/schema";
    export let table;
    export let isTableExpanded = false;

  

    $: localSchema = $schema;

    function handleColumnNameInput(event, column) {
        column.name = event.target.value;
        schema.set(localSchema);
    }

    function handleColumnTypeInput(event, column) {
        column.type = event.target.value;
        schema.set(localSchema);
    }

    function handelColumnClick(event, col) {
        event.stopPropagation();
        selectedTable.set(table);
        selectedColumn.set(col);
    }

    function handelTableSelection(e) {
        e.stopPropagation();
        if (isTableExpanded == true) {
            isTableExpanded = false;
        } else {
            selectedTable.set(table);
        }
    }
</script>

<div class="sidebar-table-card">
    <div
        class={"sidebar-table-name" +
            (isTableExpanded == true ? " sidebar-table-name-selected" : "")}
        on:click={handelTableSelection}
        on:keydown={handelTableSelection}
    >
        {table.name}
    </div>

    {#if isTableExpanded}
        <div class="sidebar-table-details">
            {#each table.columns as column}
                <div
                    on:click={(e) => handelColumnClick(e, column)}
                    on:keydown={(e) => handelColumnClick(e, column)}
                    class={"sidebar-table-column" +
                        ($selectedColumn == column
                            ? " sidebar-table-column-selected"
                            : "")}
                >
                    <input
                        class="sidebar-table-field-name"
                        type="text"
                        value={column.name}
                        on:input={(e) => handleColumnNameInput(e, column)}
                    />

                    <input
                        class="sidebar-table-field-type"
                        type="text"
                        value={column.type}
                        on:input={(e) => handleColumnTypeInput(e,column)}
                    />

                    <div class="sidebar-table-field-constraints">
                        <button class="sidebar-table-null-button"> N </button>
                        <button class="sidebar-table-indextype-button">
                            I
                        </button>
                        <button class="sidebar-table-column-options-button">
                            ...
                        </button>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .sidebar-table-card {
        cursor: pointer;
        border-bottom: 1px solid rgb(231, 231, 231);
        border-left: 10px solid #d1c4e9;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    .sidebar-table-name {
        padding-left: 10px;
        font-weight: 500;
        font-size: 1.125rem;
        background-color: rgb(241, 245, 249);
        padding-bottom: 0.7rem;
        padding-top: 0.7rem;
    }

    .sidebar-table-name-selected {
        color: #4338ca;
        font-weight: bold;
        background-color: #c7d2fe;
    }

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

    .sidebar-table-field-constraints > button {
        border: none;
        padding-left: 5px;
        padding-right: 5px;
        flex-grow: 1;
        background-color: transparent;
    }
    .sidebar-table-field-constraints > button:hover {
        background-color: rgb(241, 245, 249);
        cursor: pointer;
    }
</style>
