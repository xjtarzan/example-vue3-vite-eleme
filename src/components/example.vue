<template>
	{{ count.toFixed(2) }} - {{ store.fullName }}
	<p>name: {{ userName }}</p>
	<p>
		<el-button type="primary" @click="onChangeName()">改变Store里的名字</el-button>
	</p>
</template>

<script lang="ts">
export default {
	name: 'example',
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { userStore } from '@/store/example'
import { apiGetUserProductList } from '@/apis/user'

const count = ref(1)
const store = userStore()
// const userName = store.userName
const { userName } = storeToRefs(store)

const onChangeName = (name?: any) => {
	store.updateUserName(name ?? '李同学')
}

function getUserProduct() {
	const param = {
		currentPage: 1,
		pageSize: 10,
		productName: '',
		productId: '',
		localeIds: '',
		status: 1,
		orderName: 'createTime',
	}
	apiGetUserProductList(param).then((res) => {
		console.log(res.data)
	})
}

onMounted(() => {
	onChangeName('张同学')
	getUserProduct()
	// console.log(import.meta.env.MODE)
})
</script>

<style scoped></style>
