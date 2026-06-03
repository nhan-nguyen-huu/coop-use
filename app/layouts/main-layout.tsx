import { Outlet } from 'react-router'
import { authHelper } from '~/helpers'

export const clientLoader = () => authHelper.handleProtectedRoute('ROOT')

export function HydrateFallback() {
  return <p></p>
}

const MainLayout = () => {
  return <Outlet />
}

export default MainLayout
