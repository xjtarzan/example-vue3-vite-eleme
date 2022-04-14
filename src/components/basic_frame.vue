<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header" style="padding: 0">
				<top-nav></top-nav>
			</el-header>
			<el-container class="container">
				<el-aside class="sider" width="200px">
					<left-menu></left-menu>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import leftMenu from '@/components/left_menu.vue'
import topNav from '@/components/top_nav.vue'

</script>

<style>
.container {
	height: calc(100vh - 60px);
}
.header {
	color: #fff;
	background-color: #191a23;
}
.sider {
	background-color: #fff;
	box-shadow: 1px 0 5px #ddd;
}
</style>
