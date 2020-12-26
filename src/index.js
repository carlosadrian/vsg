import Vue from 'vue';
// import anime from 'animejs';
import Markup from "./components/Gallery";
import Gallery from './Gallery';

Vue.config.productionTip = false;

new Vue({
    data () {
        let items = [];
        for(let i = 1; i <= 20; i++)
            items.push({id: i, title: 'Image ' + i, src: 'https://localhost/320x548.png'});

        return {
            btnText: 'Loading',
            items
        }
    },
    render(h) {
        return h(Markup, { props: this.$data });
    },
    mounted() {
        let vm = this;
        if(window.DeviceOrientationEvent && (DeviceMotionEvent.requestPermission || DeviceOrientationEvent.requestPermission)) {
            vm.$nextTick(function() {
                let h3 = document.querySelector('h3');
                vm.$data.btnText = 'Enable the experience';
                h3.addEventListener('click', function() {
                    let g = new Gallery();
                    g.init();
                }, true);
            });
        } else {
            vm.$data.btnText = 'No Support';
        }
    }
}).$mount('#app');
