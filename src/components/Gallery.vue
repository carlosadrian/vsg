<template>
    <section>
        <div class="gallery-clipping">
            <h3>Gallery {{ btnText }}</h3>
            <span class="lbl do-x"></span><span class="lbl do-y"></span>
            <ul>
                <!--       :items="items"-->
                <li v-for="(item) in items" :key="item.id">
                    <img :src="item.src" :alt="item.title" />
                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">

    export default {
        props: ['items', 'btnText']
    }

</script>
<style scoped>
    h3 {
        color: #FFFFFF;
        background: #0000AB;
        position: fixed;
        top: 0;
        left: 0;
        line-height: 2em;
        z-index: 1000;
    }
    .gallery-clipping {
        position: absolute;
        top: -50%;
        left: -25%;
        width: 966px;
    }
    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul {
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    li {
        display: inline-block;
        width: 320px;
        height: 548px;
        border: 1px solid #000000;
        float: left;
    }
    .lbl {
        position: fixed;
        top: 0;
        z-index: 10000;
    }
    .do-x {
        left: 2em;
    }
    .do-y {
        left: 10em;
    }
</style>

