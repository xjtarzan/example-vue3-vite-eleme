// 导入axios实例
import httpRequest from '@/request/index'
import { getCookie, setCookie } from 'typescript-cookie'

const header: any = {
	token: getCookie('token'),
}

// 定义接口的传参
interface UnionOperatorParams {
	productId: string
	localeId: string
}

// 获取联运商列表
export function apiGetUnionOperatorList(): Promise<any[]> {
	const _params: UnionOperatorParams = {
		productId: '10001123',
		localeId: '01',
	}
	return new Promise((resolve, reject) => {
		httpRequest({
			url: '//testplatform.gamebean.net/logcenter_service/log/mis/operationLine/getOperationLineList.htm',
			method: 'post',
			data: _params,
			headers: header,
		}).then((res: any) => {
			if (res.data) {
				resolve(res.data)
			} else {
				resolve([])
			}
		})
	})
}

// 获取表格数据
export function apiGetTableData<T>(params: T) {
	return httpRequest({
		url: '//testplatform.gamebean.net/logcenter_service/log/logQuery/getStartLog.htm',
		method: 'post',
		data: params,
	})
}
