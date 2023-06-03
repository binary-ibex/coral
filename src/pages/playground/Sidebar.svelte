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
            
            <div class="sidebar-table-details">
                {#each table.columns as column}
                    <div class="sidebar-table-column">
                        <input
                            class="sidebar-table-field-name"
                            type="text"
                            value={column.name}
                        />

                        <input
                            class="sidebar-table-field-type"
                            type="text"
                            value={column.type}
                        />

                        <div class="sidebar-table-field-constraints">
                            <button class="sidebar-table-null-button">
                                N
                            </button>
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
        </div>
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
        cursor: pointer;
        border-bottom: 1px solid rgb(231, 231, 231);
        border-left: 10px solid #d1c4e9;
        cursor: pointer;
        display: flex;
        flex-direction: column;
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
        background-color: rgb(241, 245, 249);
        padding-bottom: 0.7rem;
        padding-top: 0.7rem;
    }

    .sidebar-table-column {
        display: flex;
        flex-direction: row;
        padding: 8px 4px 8px 4px;
    }


    .sidebar-table-field-name {
        width: 40%;
        padding: 6px;
        margin-left: 10px;
        border: 1px solid #e2e8f0;
        border-radius: 5px;
    }

    .sidebar-table-field-type {
        width: 30%;
        padding: 6px;
        margin-left: 10px;
        border: 1px solid #e2e8f0;
        border-radius: 5px;
    }

    .sidebar-table-field-constraints {
        width: 30%;
        display: flex;
        align-items: center;
        margin-left: 10px;
        align-items: stretch;
    }

    .sidebar-table-field-constraints>button {
        border: none;
        padding-left: 5px;
        padding-right:5px;
        flex-grow: 1;
        background-color: transparent;
    }
    .sidebar-table-field-constraints>button:hover {
        background-color: rgb(241, 245, 249);
        cursor: pointer;
    }
</style>
