import { defineStore } from 'pinia'

export const userStore = defineStore('userInfo', {
	state: () => {
		return {
			userID: '10001',
			userName: '某同学',
		}
	},
	getters: {
		fullName: (state) => {
			return `${state.userName}(${state.userID})`
		},
	},
	actions: {
		updateUserName(name: string) {
			this.userName = name
		},
	},
	// 开启数据缓存
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'my_project',
				storage: localStorage,
			},
		],
	},
})
