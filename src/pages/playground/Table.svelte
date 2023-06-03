<script>
    import { onMount } from "svelte";
    import { schema } from "../../stores/schema.js";
    export let table;

    let localScheme;
    var boxRef;
    let xOffset, yOffset;
    let selectionLocked = false;

    schema.subscribe((value) => {
        localScheme = value;
    });

    function lockSelection(event) {
        selectionLocked = true;
        xOffset = event.clientX - boxRef.offsetLeft;
        yOffset = event.clientY - boxRef.offsetTop;
    }

    function handleMouseDown(event) {
        lockSelection(event);
    }

    function handelMouseUp(event) {
        selectionLocked = false;
    }

    function handelMouseMove(event) {
        if (selectionLocked) {
            table.position.left = event.clientX - xOffset;
            table.position.top = event.clientY - yOffset;
            boxRef.style.left = `${table.position.left}px`;
            boxRef.style.top = `${table.position.top}px`;
            schema.set(localScheme);
        }
    }

    onMount(() => {
        boxRef.style.left = table.position.left + "px";
        boxRef.style.top = table.position.top + "px";
    });
</script>

<svelte:window on:mousemove={handelMouseMove} on:mouseup={handelMouseUp} />
<div
    class="table-card"
    on:mousedown={(e) => handleMouseDown(e)}
    bind:this={boxRef}
>
    <div class="table-name">
        <h3>{table.name}</h3>
    </div>
    <div class="table-columns">
        {#each table.columns as col}
            <div class="table-column">
                <div class="column-constrain"></div>
                <div class="field-name">{col.name}</div>
                <div class="field-type">{col.type}</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .table-card {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 250px;
        max-width: 300px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-top: 7px solid rgb(241, 80, 107);
        user-select: none;
        cursor: pointer;
    }

    .table-columns {
        display: flex;
        flex-direction: column;
    }

    .table-name {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-weight: 500;
        background-color: rgb(235, 244, 255);
        color: #140f1fad;
        border-left: 1px solid rgb(222, 229, 236);
        border-bottom: 1px solid rgb(222, 229, 236);
        border-right: 1px solid rgb(222, 229, 236);
    }

    .table-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 0px;
    }

    .table-column:hover {
        background-color: rgb(245,247,250);
        border-radius: 5px;
    }
    .table-column:hover .field-name  {
        color: rgb(94, 32, 94);
    }
    .table-column:hover .field-type  {
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
