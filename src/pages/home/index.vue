<template>
	<el-card shadow="never" :body-style="{ padding: '10px' }">
		<el-row :gutter="10">
			<el-col :span="6">
				<el-date-picker
					style="width: 100%"
					v-model="queryForm.timeRange"
					type="datetimerange"
					range-separator="至"
					start-placeholder="开始时间"
					end-placeholder="结束时间"
					value-format="YYYY-MM-DD hh:mm:ss"
				/>
			</el-col>
			<el-col :span="4">
				<el-select style="width: 100%" v-model="queryForm.operationLineId" placeholder="联运">
					<el-option v-for="item in operationLineList" :label="item.name" :value="item.oplId" />
				</el-select>
			</el-col>
			<el-col :span="4">
				<el-select style="width: 100%" v-model="queryForm.platformId" placeholder="终端平台">
					<el-option v-for="(value, key) in devicePlatformList" :label="value" :value="key" />
				</el-select>
			</el-col>
			<el-col class="text-right" :span="4" :offset="6">
				<el-button type="primary" :icon="Search" @click="onSearch">查询</el-button>
			</el-col>
		</el-row>
	</el-card>

	<el-card style="margin-top: 10px" shadow="never" :body-style="{ padding: '10px' }">
		<el-table style="width: 100%" size="small" :max-height="tableHeight" :data="tableData" v-loading="tableLoading">
			<el-table-column prop="platformDesc" label="设备" width="300" />
			<el-table-column prop="nowtime" label="时间" width="170" show-overflow-tooltip />
			<el-table-column prop="businessId" label="业务" width="180" show-overflow-tooltip />
			<el-table-column prop="udid" label="UDID" width="220" show-overflow-tooltip />
			<el-table-column prop="mac" label="MAC" width="160" show-overflow-tooltip />
			<el-table-column prop="platformId" label="终端平台" width="160" show-overflow-tooltip />
			<el-table-column prop="osVersion" label="系统版本" width="80" show-overflow-tooltip />
			<el-table-column prop="platformDesc" label="设备" width="300" show-overflow-tooltip />
			<el-table-column prop="nowtime" label="时间" width="160" show-overflow-tooltip />
			<el-table-column prop="businessId" label="业务" width="160" show-overflow-tooltip />
			<el-table-column prop="udid" label="UDID" width="260" show-overflow-tooltip />
			<el-table-column prop="mac" label="MAC" width="160" show-overflow-tooltip />
			<el-table-column prop="platformId" label="终端平台" width="160" show-overflow-tooltip />
			<el-table-column prop="osVersion" label="系统版本" width="80" show-overflow-tooltip />
			<el-table-column prop="platformDesc" label="设备" width="300" show-overflow-tooltip />
			<el-table-column prop="nowtime" label="时间" width="160" />
			<el-table-column prop="businessId" label="业务" width="160" />
			<el-table-column prop="udid" label="UDID" width="260" />
			<el-table-column prop="mac" label="MAC" width="160" />
			<el-table-column prop="platformId" label="终端平台" width="160" />
			<el-table-column prop="osVersion" label="系统版本" width="80" />
			<el-table-column prop="platformDesc" label="设备" width="300" />
			<el-table-column prop="nowtime" label="时间" width="160" />
			<el-table-column prop="businessId" label="业务" width="160" />
			<el-table-column prop="udid" label="UDID" width="260" />
			<el-table-column prop="mac" label="MAC" width="160" />
			<el-table-column prop="platformId" label="终端平台" width="160" />
			<el-table-column prop="osVersion" label="系统版本" width="80" />
			<el-table-column prop="platformDesc" label="设备" width="300" />
			<el-table-column prop="nowtime" label="时间" width="160" />
			<el-table-column prop="businessId" label="业务" width="160" />
			<el-table-column prop="udid" label="UDID" width="260" />
			<el-table-column prop="mac" label="MAC" width="160" />
			<el-table-column prop="platformId" label="终端平台" width="160" />
			<el-table-column prop="osVersion" label="系统版本" width="80" />
			<el-table-column prop="platformDesc" label="设备" width="300" />
			<el-table-column prop="nowtime" label="时间" width="160" />
			<el-table-column prop="businessId" label="业务" width="160" />
			<el-table-column prop="udid" label="UDID" width="260" />
			<el-table-column prop="mac" label="MAC" width="160" />
			<el-table-column prop="platformId" label="终端平台" width="160" />
			<el-table-column prop="osVersion" label="系统版本" width="80" />
			<el-table-column prop="platformDesc" label="设备" width="300" />
			<el-table-column prop="nowtime" label="时间" width="160" />
			<el-table-column prop="businessId" label="业务" width="160" />
			<el-table-column prop="udid" label="UDID" width="260" />
			<el-table-column prop="mac" label="MAC" width="160" />
			<el-table-column prop="platformId" label="终端平台" width="160" />
			<el-table-column prop="osVersion" label="系统版本" width="80" />
		</el-table>
	</el-card>
</template>

<script lang="ts">
export default {
	name: 'home',
}
</script>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { apiGetUnionOperatorList, apiGetTableData } from '@/apis/home'

// 查询表单数据
const queryForm = reactive({
	timeRange: [],
	operationLineId: '',
	platformId: '',
	productId: '10001123',
	localeId: '01',
	groupId: '1',
	sort: 'desc',
	order: 'nowtime',
	currentPage: 1,
	pageSize: 200,
})
// 联运商列表
const operationLineList = ref<any>([])
// 设备平台
const devicePlatformList = ref({ '0': 'Android', '1': 'IOS', '6': 'H5' })
// 表格数据
const tableData = ref<any>([])
// 表格高度
const tableHeight = document.documentElement.clientHeight - 186
// loading状态
const tableLoading = ref(false)

// 查询表单数据
function onSearch() {
	tableData.value = []
	const params = {
		groupId: queryForm.groupId,
		sort: queryForm.sort,
		order: queryForm.order,
		productId: queryForm.productId,
		localeId: queryForm.localeId,
		queryType: 'query',
		operationLineId: queryForm.operationLineId,
		startTime: queryForm.timeRange[0] ? queryForm.timeRange[0] : '',
		endTime: queryForm.timeRange[1] ? queryForm.timeRange[1] : '',
		currentPage: queryForm.currentPage,
		pageSize: queryForm.pageSize,
	}
	tableLoading.value = true
	apiGetTableData(params)
		.then((res: any) => {
			if (res.status === '0') {
				tableData.value = res.data.list
			}
		})
		.finally(() => {
			tableLoading.value = false
		})
}

// 查询联运商
// function queryUnionOperator() {
// 	const params = {
// 		productId: queryForm.productId,
// 		localeId: queryForm.localeId,
// 	}
// 	return new Promise((resolve, reject) => {
// 		apiGetUnionOperatorList(params).then((res: any) => {
// 			if (res.status === '0') {
// 				resolve(res.data)
// 			} else {
// 				resolve([])
// 			}
// 		})
// 	})
// }

onMounted(async () => {
	operationLineList.value = await apiGetUnionOperatorList()
})
</script>

<style></style>
