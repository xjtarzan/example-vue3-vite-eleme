// 导入axios实例
import httpRequest from '@/request/index'
import { getCookie } from 'typescript-cookie'

const header: any = {
	token: getCookie('token'),
}

// 定义接口的传参
interface UserProductParam {
	currentPage: number,
	pageSize: number,
	productName: string,
	productId: string,
	localeIds: string,
	status: number,
	orderName: string
}

// 获取用户产品列表
export function apiGetUserProductList(param: UserProductParam) {
	return httpRequest({
		url: '//testplatform.gamebean.net/v4/account/newAccountManage/queryProductPageList.htm',
		method: 'post',
		data: param,
		headers: header,
	})
}