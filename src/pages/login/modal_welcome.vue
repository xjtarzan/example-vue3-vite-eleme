<template>
	<el-dialog v-model="isOpenDialog" width="30%" center destroy-on-close :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
		<el-row>
			<el-col :span="24">
				<div class="text-center">
					<el-avatar :size="50" :src="props.userAvatar" />
					<p style="margin-top: 10px">
						<strong>{{ props.userName }}</strong> 欢迎您！
					</p>
					<p style="margin-top: 10px">今天是：{{ props.nowDate }}</p>
				</div>
			</el-col>
		</el-row>
		<template #footer>
			<div class="dialog-footer">
				<el-button type="primary" @click="onEnter">进入系统</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

// 定义传参接口
interface PropsParam {
	userAvatar: string
	nowDate: string
	userName: string
	isOpenDialog: boolean
}
// 定义父组件传递过来的数据
const props = defineProps<PropsParam>()
// 定义要触发的父组件的方法
const emit = defineEmits(['onConfirm'])
// 必须是响应式数据
const isOpenDialog = ref(props.isOpenDialog)
// 确定操作
function onEnter() {
	emit('onConfirm', '我是子组件发出的数据')
}
// 显示弹层
function onOpen() {
	isOpenDialog.value = true
}
// 关闭弹层
function onClose() {
	isOpenDialog.value = false
}

// watch(() => props.isOpenDialog, (nowVal) => {
// 	isOpenDialog.value = nowVal
// })

// 暴露子组件的数据
defineExpose({
	onClose,
	onOpen,
})
</script>

<style></style>
