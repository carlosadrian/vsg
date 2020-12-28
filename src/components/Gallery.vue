<template>
    <section>
        <div class="gallery-clipping">
            <h1 v-if="showWelcome">Gallery <button type="button" v-if="hasSupport" @click="enableGallery()">Enable the experience</button></h1>
            <span class="debug"></span>
            <ul>
                <li v-for="(item) in items" :key="item.id">
                    <img :src="item.src" :alt="item.title" />
                </li>
            </ul>
        </div>
    </section>
</template>
<script lang="ts">
    import Scrollable from './../Scrollable';

    export default {
        data() {
            return {
                hasSupport: window.DeviceOrientationEvent && window.DeviceOrientationEvent.requestPermission,
                showWelcome: true,
            }
        },
        props: ['items'],
        methods: {
            enableGallery() {
                Scrollable.init('.gallery-clipping');
                this.$data.showWelcome = false;
            }
        }
    }

</script>
<style scoped>
    h1 {
        color: #FFFFFF;
        background: #0000AB;
        position: fixed;
        top: 0;
        left: 0;
        line-height: 2em;
        z-index: 1000;
        padding: 0 1em;
    }
    .gallery-clipping {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: left 0.1s linear;
    }
    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul {
        width: 1960px;
        position: relative;
        overflow: hidden;
    }
    li {
        display: inline-block;
        width: 280px;
        height: 548px;
        border: 1px solid #000000;
        float: left;
        overflow: hidden;
    }
    button {
        border: 0;
        padding: 1em;
        border-radius: 2px;
        background: #00b669;
        color: #FFFFFF;
        width: 25em;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -12.5em;
        margin-top: -1.5em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        word-spacing: 0.5em;
    }
    .debug {
        position: fixed;
        top: 0;
        left: 2em;
        z-index: 10000;
    }

</style>

