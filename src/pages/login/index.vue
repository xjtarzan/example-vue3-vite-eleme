<template>
	<div class="bg-box">
		<div class="wrap">
			<el-form :model="formData" label-width="120px">
				<el-form-item label="用户名">
					<el-input v-model="formData.name" />
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="formData.password" type="password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm" :loading="isButtonLoading">确定登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
	<!-- 弹层子组件 -->
	<t-user-welcome v-bind="propData" @onConfirm="onEnter"></t-user-welcome>
	<!-- <teleport to="body">
		<t-user-welcome v-bind="propData" @onConfirm="onEnter"></t-user-welcome>
	</teleport> -->
</template>

<script lang="ts">
export default {
	name: 'login',
}
</script>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import { apiLogin } from '@/apis/login'
import dayjs from 'dayjs'
// 导入子组件
import tUserWelcome from './modal_welcome.vue'

const router = useRouter()
const store = userStore()
const formData = reactive({
	'name': '',
	'password': '',
})
const isButtonLoading = ref(false)
// 传递给子组件的数据
const propData = reactive({
	'userAvatar': 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	'nowDate': computed(() => { return dayjs(new Date()).format('YYYY 年 MM 月 DD 日，dddd') }),
	'userName': store.userName,
	'isOpenDialog': false,
})

// 点击登录按钮
function submitForm(): void {
	isButtonLoading.value = true
	const params = {
		'account': formData.name,
		'password': formData.password,
		'platfromLanguageId': 'zh_CN',
		'isRemember': 'y',
	}
	apiLogin(params).then((res) => {
		store.updateUserInfo(res.data)
		propData.isOpenDialog = true
	}).finally(() => { isButtonLoading.value = false })
}
// 点击进入系统按钮
function onEnter(data: string) {
	console.log(data)
	propData.isOpenDialog = false
	router.push('/home')
}
</script>

<style scoped>
.bg-box {
	min-width: 1200px;
	min-height: 100vh;
	background: #fff url('/src/assets/logo.png') no-repeat center top;
}
.bg-box .wrap {
	position: relative;
	width: 400px;
	margin: 0 auto;
	padding-top: 210px;
}
</style>
