import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router/index'
// 导入Pinia状态管理器
import store from './store/index'
// 导入element前端UI组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
