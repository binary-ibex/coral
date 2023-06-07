<script>
    import SidebarTable from "./SidebarTable.svelte";
    import { schema, selectedTable } from "../../stores/schema";
</script>

<div class="sidebar">
    <div class="sidebar-tables">
        <div class="sidebar-top-header">
            <div class="sidebar-tables-heading">Tables</div>
            <button class="sidebar-new-table-button">
                <span class="add_icon">+</span> New Table
            </button>
        </div>
        {#each $schema.tables as table}
            <SidebarTable
                {table}
                isTableExpanded={table === $selectedTable}
            />
        {/each}
    </div>
</div>

<style>
    .add_icon {
        font-size: 20px;
    }
    .sidebar {
        grid-area: sidebar;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        width: 100%;
        box-shadow: 1px 0px 10px -5px rgba(0, 0, 0, 0.5);
        position: relative;
    }
    .sidebar-top-header {
        padding: 10px 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: black 0px 0px 10px -2px;
        font-size: 1.125rem;
        position: relative;
    }

    .sidebar-new-table-button {
        background-color: rgb(66, 184, 166);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 0.7rem;
        cursor: pointer;
        font-weight: 800;
        letter-spacing: 0.025em;
        line-height: 1.25rem;
    }
    .sidebar-tables-heading {
        font-weight: 500;
        padding-left: 10px;
    }
</style>
