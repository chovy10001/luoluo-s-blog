import { defineClientConfig } from '@vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
// const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
export default defineClientConfig({
    rootComponents: [
        // NavMusic,
        // ...
    ],
});
