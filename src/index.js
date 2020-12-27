import Vue from 'vue';
// import anime from 'animejs';
import Markup from "./components/Gallery";
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
    data () {
        return {
            items: []
        }
    },
    render(h) {
        return h(Markup, { props: this.$data });
    },
    mounted() {
        let vm = this;
        axios.get(process.env.VUE_APP_API_URL).then(response => {
            vm.$data.items = response.data;
        });
    }
}).$mount('#app');
