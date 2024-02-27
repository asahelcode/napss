import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home/index'
import RootLayout from '@/layout/RootLayout'

const router = createBrowserRouter([
	{
		path: '',
		Component: RootLayout,
		children: [
			{
				path: '/',
				Component: HomePage
			}
		]
	}
])

export default router