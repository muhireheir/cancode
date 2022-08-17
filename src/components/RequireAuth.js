import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import routes from '../routes'
import SideBar from './nav/SideBar'
import TopNav from './nav/TopNav'

const RequireAuth = ({ Component, ...props }) => {
  const { user } = useSelector(state => state);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();



  const isLoggedIn = () => {
    const token = localStorage.getItem('userInfo');
    if (token) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(routes.login);
    } else {
      setIsLoggedIn(true);
    }
  }, [history])
  return (
    <>


      {loggedIn && (
        <>
          <div className='w-full'>
              <TopNav />
            <div className="flex overflow-hidden bg-white pt-16">
              <SideBar />
              <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
              <div id="main-content" className="h-full w-full relative overflow-y-auto lg:ml-64">
                <main>
                  <div className="pt-6 px-4">
                  <Component {...props} />
                  </div>
                </main>

              </div>
            </div>
          </div>
        </>)}
    </>
  )
}
export default RequireAuth