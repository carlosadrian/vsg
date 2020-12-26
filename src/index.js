import Vue from 'vue';
// import anime from 'animejs';
import Markup from "./components/Gallery";
import Gallery from './Gallery';

Vue.config.productionTip = false;

new Vue({
    template: '<section><Markup></Markup></section>',
    data () {
        let items = [];
        for(let i = 1; i <= 11; i++)
            items.push({id: i, title: 'Title ' + i, src: ''});
        return {
            items
        }
    },
    render(h) {
        return h(Markup);
    },
    mounted() {
        if(window.DeviceOrientationEvent && (DeviceMotionEvent.requestPermission || DeviceOrientationEvent.requestPermission)) {
            this.$nextTick(function() {
                let h3 = document.querySelector('h3');
                h3.textContent = 'Enable the experience';
                h3.addEventListener('click', function() {
                    let g = new Gallery();
                    g.init();
                }, true);
            });
        } else {
            document.querySelector('h3').textContent += ' No support';
        }
    }
}).$mount('#app');
