import { defineStore } from 'pinia'

export const userStore = defineStore('userData', {
	state: () => {
		return {
			userID: null,
			userName: '',
			userInfo: {},
		}
	},
	getters: {
		fullName: (state) => {
			return `${state.userName}(${state.userID})`
		},
	},
	actions: {
		updateUserInfo(info: any) {
			this.userInfo = info.userInfo
			this.userID = info.userInfo.accountId
			this.userName = info.userInfo.name
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
