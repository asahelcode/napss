import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home/index'
import RootLayout from '@/layout/RootLayout'
import SearchPage from '@/pages/SearchPage'
import ExecutiveDetail from '@/pages/ExecutivesDetail'
import Accomplishment from '@/pages/Accomplishment'

const router = createBrowserRouter([
	{
		path: '',
		Component: RootLayout,
		children: [
			{
				path: '/',
				Component: HomePage
			},
			{
				path: '/search',
				Component: SearchPage
			},
			{
				path: '/executives/detail',
				Component: ExecutiveDetail
			},
			{
				path: '/department/accomplishment',
				Component: Accomplishment
			}
		]
	}
])

export default router