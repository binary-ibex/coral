<script>
    import { schema } from "../../stores/schema";
</script>

<div class="sidebar">
    <div class="sidebar-tables">
        <div class="sidebar-top-header">
            <div class="sidebar-tables-heading">Tables</div>
            <button class="sidebar-new-table-button"> New Table </button>
        </div>
        {#each $schema.tables as table}
            <div class="sidebar-table-card">
                <div class="sidebar-table-name">
                    {table.name}
                </div>
            </div>
            <div class="sidebar-table-details" />
        {/each}
    </div>
</div>

<style>
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

    .sidebar-table-card {
        flex-grow: 1;
        background-color: rgb(241, 245, 249);
        cursor: pointer;
        padding-bottom: 0.7rem;
        padding-top: 0.7rem;
        border-bottom: 1px solid rgb(231, 231, 231);
        border-left: 10px solid #d1c4e9;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
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

    .sidebar-table-name {
        padding-left: 10px;
        font-weight: 500;
        font-size: 1.125rem;
    }
</style>
