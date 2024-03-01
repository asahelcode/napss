import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home/index'
import RootLayout from '@/layout/RootLayout'
import RepresentativePage from '@/pages/Representative'
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
				path: '/representatives',
				Component: RepresentativePage
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