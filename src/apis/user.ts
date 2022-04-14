// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
interface UserInfoParam {
	currentPage: number,
	pageSize: number,
	productName: string,
	productId: string,
	localeIds: string,
	status: number,
	orderName: string
}

// 获取用户产品列表
export function apiGetUserInfo(param: UserInfoParam) {
	return httpRequest({
		url: '//testplatform.gamebean.net/v4/account/newAccountManage/queryProductPageList.htm',
		method: 'post',
		data: param,
	})
}