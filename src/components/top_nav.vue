<template>
	<el-row>
		<el-col :span="12">
			<div style="padding: 5px 0">
				<img style="display: block; height: 50px" src="../assets/logo-l.png" />
			</div>
		</el-col>
		<el-col :span="12">
			<div class="text-right" style="height: 32px; padding: 14px 10px; line-height: 32px">
				<el-avatar :size="32" :icon="UserFilled" />
				{{ userName }}
			</div>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'

let userName = 'Zht'
</script>

<style></style>
