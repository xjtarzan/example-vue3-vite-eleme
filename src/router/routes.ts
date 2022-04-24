const routes = [
	{
		path: '/',
		name: 'index',
		meta: {
			title: '用户登录',
		},
		redirect: '/login',
		component: () => import('@/components/basic_frame.vue'), //.vue不能省略
		children: [
			{
				path: '/home',
				name: 'home',
				meta: {
					title: '首页',
				},
				component: () => import('@/pages/home/index.vue'), //.vue不能省略
			},
			{
				path: '/example',
				name: 'example',
				meta: {
					title: '样例',
				},
				component: () => import('@/components/example.vue'), //.vue不能省略
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '用户登录',
		},
		component: () => import('@/pages/login/index.vue'), //.vue不能省略
	},
]
export default routes
