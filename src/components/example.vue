<template>
	<div>
		{{ count.toFixed(2) }} - {{ store.fullName }}
		<p>
			<el-button type="primary" @click="onChangeName()">改变Store里的名字</el-button>
		</p>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Example_Component',
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { userStore } from '@/store/example'
import { apiGetUserInfo } from '@/apis/user'

const count = ref(1)
const store = userStore()

const onChangeName = (name?: any) => {
	store.updateUserName(name ?? '李同学')
}

function getUserProduct() {
	const param = {
		currentPage: 1,
		pageSize: 20,
		productName: '',
		productId: '',
		localeIds: '',
		status: 1,
		orderName: 'createTime',
	}
	apiGetUserInfo(param).then((res) => {})
}

onMounted(() => {
	onChangeName('张同学')
	getUserProduct()
	console.log(import.meta.env.MODE)
})
</script>

<style scoped></style>
