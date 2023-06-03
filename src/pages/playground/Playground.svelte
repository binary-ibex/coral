<script>
    import Topbar from "./Topbar.svelte";
    import Sidebar from "./Sidebar.svelte";
    import WorkingCanvas from "./WorkingCanvas.svelte";
</script>

<div class="playground">
    <Topbar />
    <Sidebar />
    <WorkingCanvas />
</div>

<style>
    .playground {
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        display: grid;
        grid-template:
            "topbar topbar"
            "sidebar workingcanvas";
        grid-template-rows: 50px;
        grid-template-columns: 350px;
        overflow: hidden;
        position: relative;
    }
</style>
