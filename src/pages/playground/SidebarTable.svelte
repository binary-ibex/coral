<script>
    import SidebarTableColumn from "./SidebarTableColumn.svelte";
    import { schema } from "../../stores/schema";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiFillEdit from "svelte-icons-pack/ai/AiFillEdit.js";
    import AiOutlineCheckCircle from "svelte-icons-pack/ai/AiOutlineCheckCircle.js";
    export let table;
    export let isTableExpanded = false;
    let _editTableName = false;

    function handelTableNameEdit(event) {
        event.stopPropagation();
        table.setName(event.target.value);
    }

    function handelTableSelection(e) {
        if (e.type == "click") {
            e.stopPropagation();
            if (isTableExpanded == true) {
                isTableExpanded = false;
            } else {
                schema.setSelectedTable(table);
            }
        }
    }
</script>

<div class="sidebar-table-card">
    <div
        class={"sidebar-table-header" +
            (isTableExpanded == true ? " sidebar-table-header-selected" : "")}
        on:click={handelTableSelection}
        on:keydown={handelTableSelection}
    >
        {#if !_editTableName}
            <div class="sidebar-table-header-table-name">
                {$table.name}
            </div>
            <div
                class="sidebar-table-header-action-icon"
                on:click={(e) => {
                    e.stopPropagation();
                    _editTableName = true;
                }}
                on:keydown={(e) => {
                    e.stopPropagation();
                    _editTableName = true;
                }}
            >
                <Icon
                    src={AiFillEdit}
                    color="#4338ca"
                    size="20"
                    className="custom-edit-icon"
                    title="Edit Table Name"
                />
            </div>
        {:else}
            <input
                class="sidebar-table-header-table-name-input"
                type="text"
                value={table.name}
                on:input={handelTableNameEdit}
                on:click={(e) => e.stopPropagation()}
            />

            <div
                class="sidebar-table-header-action-icon"
                on:click={(e) => {
                    e.stopPropagation();
                    _editTableName = false;
                }}
                on:keydown={(e) => {
                    e.stopPropagation();
                    _editTableName = false;
                }}
            >
                <Icon
                    src={AiOutlineCheckCircle}
                    color="#4338ca"
                    size="20"
                    className="custom-edit-icon"
                    title="Edit Table Name"
                />
            </div>
        {/if}
    </div>

    {#if isTableExpanded}
        <div class="sidebar-table-details">
            {#each $table.columns as column}
                <SidebarTableColumn {column} {table} />
            {/each}
            <div class="sidebar-table-bottom-menu">
                <button
                    class="sidebar-table-bottom-menu-button"
                    on:click={(e) => table.addColumn()}
                >
                    Add Column
                </button>
                <button class="sidebar-table-bottom-menu-button">
                    Add Index
                </button>
            </div>
        </div>
    {/if}
</div>

<style>
    .sidebar-table-header-table-name-input {
        border: none;
        padding: 5px;
        border-radius: 5px;
    }
    .sidebar-table-bottom-menu {
        display: flex;
        flex-direction: row;
        justify-content: end;
        padding: 10px;
    }

    .sidebar-table-bottom-menu-button {
        background-color: #4338ca;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 16px 8px 16px;
        margin-left: 10px;
        cursor: pointer;
    }

    .sidebar-table-header-action-icon {
        margin-right: 10px;
    }
    .sidebar-table-card {
        cursor: pointer;
        border-bottom: 1px solid rgb(231, 231, 231);
        border-left: 10px solid #d1c4e9;
        cursor: pointer;
        display: flex;
        flex-direction: column;
    }

    .sidebar-table-header {
        padding-left: 10px;
        font-weight: 500;
        font-size: 1.125rem;
        background-color: rgb(241, 245, 249);
        padding-bottom: 0.7rem;
        padding-top: 0.7rem;
        display: flex;
        justify-content: space-between;
    }

    .sidebar-table-header-selected {
        color: #4338ca;
        font-weight: bold;
        background-color: #c7d2fe;
    }
</style>
