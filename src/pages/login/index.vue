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
					<el-button type="primary" @click="submitForm">确定登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
	<!-- 弹层子组件 -->
	<c-user-welcome v-bind="propData" @onConfirm="onEnter"></c-user-welcome>
</template>

<script lang="ts">
export default {
	name: 'login',
}
</script>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/user'
import { apiLogin } from '@/apis/login'
import dayjs from 'dayjs'
// 导入子组件
import cUserWelcome from './modal_welcome.vue'

const router = useRouter()
const store = userStore()
const formData = reactive({
	'name': '',
	'password': '',
})
// 传递给子组件的数据
const propData = reactive({
	'userAvatar': 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	'nowDate': computed(() => { return dayjs(new Date()).format('YYYY 年 MM 月 DD 日，dddd') }),
	'userName': store.userName,
	'isShowDialog': false,
})

// 点击登录按钮
function submitForm(): void {
	const params = {
		'account': formData.name,
		'password': formData.password,
		'platfromLanguageId': 'zh_CN',
		'isRemember': 'y',
	}
	apiLogin(params).then((res) => {
		store.updateUserInfo(res.data)
		propData.isShowDialog = true
	})
}
// 点击进入系统按钮
function onEnter(data: string) {
	console.log(data)
	propData.isShowDialog = false
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
