const routes = [
	{
		path: '/',
		name: 'index',
		title: '首页',
		redirect: '/login',
		component: () => import('@/components/basic_frame.vue'), //.vue不能省略
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/pages/home/index.vue'), //.vue不能省略
			},
			{
				path: '/example',
				name: 'example',
				component: () => import('@/components/example.vue'), //.vue不能省略
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		title: '用户登录',
		component: () => import('@/pages/login/index.vue'), //.vue不能省略
	},
]
export default routes
