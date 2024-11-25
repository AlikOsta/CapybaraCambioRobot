import styles from './layout.module.scss'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <div className={styles['layout']}>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }