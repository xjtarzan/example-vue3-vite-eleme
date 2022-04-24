<template>
	<el-menu :default-active="activeMenu" :unique-opened="true" style="border: none;">
		<el-sub-menu index="platformLog">
			<template #title>
				<el-icon><platform /></el-icon>
				<span>平台日志</span>
			</template>
			<el-menu-item index="home" @click="onActiveMenu">
				<el-icon><video-play /></el-icon>
				<span>启动日志</span>
			</el-menu-item>
			<el-menu-item index="example" @click="onActiveMenu">
				<el-icon><histogram /></el-icon>
				<span>心跳数据</span>
			</el-menu-item>
		</el-sub-menu>
		<el-sub-menu index="2">
			<template #title>
				<el-icon><shopping-cart /></el-icon>
				<span>订单日志</span>
			</template>
			<el-menu-item index="2-1">
				<el-icon><list /></el-icon>
				<span>订单数据</span>
			</el-menu-item>
			<el-menu-item index="2-2">
				<el-icon><list /></el-icon>
				<span>退款订单</span>
			</el-menu-item>
			<el-menu-item index="2-3">
				<el-icon><list /></el-icon>
				<span>其他订单</span>
			</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Platform, VideoPlay, Histogram, ShoppingCart, List } from "@element-plus/icons-vue"

const router = useRouter()
const route = useRoute()
let activeMenu = ref<any>('')

function onActiveMenu(e: any) {
    activeMenu.value = e.index
    router.push({
        name: e.index
    })
}

onMounted(() => {
	activeMenu.value = route.name ? route.name : 'home'
})
</script>

<style></style>
