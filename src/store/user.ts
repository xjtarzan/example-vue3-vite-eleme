import { anyTypeAnnotation } from '@babel/types'
import { defineStore } from 'pinia'

// interface EmptyObject {
// 	[key: string]: any
// }

export const userStore = defineStore('userData', {
	state: () => {
		return <any>{
			userID: null,
			userName: '',
			userInfo: {},
			userStorage: {}
		}
	},
	getters: {
		fullName: (state) => {
			return `${state.userName}(${state.userID})`
		},
	},
	actions: {
		updateUserInfo(info: any) {
			const _id = info.userInfo.accountId
			this.userInfo = info.userInfo
			this.userID = info.userInfo.accountId
			this.userName = info.userInfo.name
			this.userStorage[_id] = {
				columns: {
					index: ['name', 'id', 'createTime'],
				},
			}
		},
	},
	// 开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'userData',
				storage: localStorage,
			},
		],
	},
})
