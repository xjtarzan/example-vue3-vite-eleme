// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
interface LoginParams {
    'account': string,
    'password': string,
    'platfromLanguageId': string,
    'isRemember': string
}

// 发送登录请求
export function apiLogin(params: LoginParams) {
    return httpRequest({
        url: '//testplatform.gamebean.net/v4/bbsBase/login.htm',
        method: 'post',
        data: params,
    })
}
