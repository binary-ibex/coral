<script>
    import Table from "./Table.svelte";
    import { schema } from "../../stores/schema";

    var boxref = null;
    var canvasRef = null;
    var is_selected = false;
    var xOffset, yOffset;
    let internalBoxScale = 1;

    function handelmousedown(event) {
        if (event.target == canvasRef && boxref != null) {
            is_selected = true;
            xOffset = event.clientX - boxref.offsetLeft;
            yOffset = event.clientY - boxref.offsetTop;
        }
    }

    function handelMouseWheel(event) {
        if (boxref != null && boxref != undefined && event.target == canvasRef) {
            if (event.deltaY > 0) {
                var scrollPosition = 1;
            } else {
                var scrollPosition = -1;
            }
            var scalingFactor = 0.05;
            let scale = internalBoxScale + scrollPosition * scalingFactor;
            internalBoxScale = scale > 0 ? scale : 0;
            boxref.style.transform = "scale(" + internalBoxScale + ")";
        }
    }

    function handelMouseUp(event) {
        is_selected = false;
    }

    function handelMouseMove(event) {
        if (is_selected == true) {
            boxref.style.left = event.clientX - xOffset + "px";
            boxref.style.top = event.clientY - yOffset + "px";
        }
    }

</script>

<svelte:window
    on:mousemove={handelMouseMove}
    on:mouseup={handelMouseUp}
    on:wheel={handelMouseWheel}
/>
<div
    class="working-canvas"
    bind:this={canvasRef}
    on:mousedown={handelmousedown}
>
    <div class="hidden-container" bind:this={boxref}>
        {#each $schema.tables as table}
            <Table {table}/>
        {/each}
    </div>
</div>

<style>
    .hidden-container {
        position: absolute;
        height: 0px;
        width: 0px;
    }
    .working-canvas {
        grid-area: workingcanvas;
        width: 100%;
        height: 100%;
        background-color: rgb(242, 246, 248);
        overflow: hidden;
        position: relative;
    }
</style>
