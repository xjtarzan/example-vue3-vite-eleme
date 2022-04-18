<template>
	<el-row>
		<el-col :span="12">
			<div style="padding: 5px 0">
				<img style="display: block; height: 50px" src="../assets/logo-l.png" />
			</div>
		</el-col>
		<el-col :span="12">
			<div class="text-right" style="height: 28px; padding: 16px 10px; line-height: 28px">
				<el-avatar style="vertical-align: middle;" :size="28" :icon="UserFilled" />
				<span style="margin-left: 5px;">{{ store.userName }}</span>
			</div>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { userStore } from '@/store/user'

const store = userStore()
</script>

<style></style>
