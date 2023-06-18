import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CiSearch } from 'react-icons/ci'

import HamburgerButton from './HamburgerButton'
import DarkModeSwitcher from './DarkModeSwitcher'
import DropdownNotifications from './DropdownNotifications'
// import DropdownMessage from './DropdownMessage';
// import DropdownUser from './DropdownUser';

type HeaderProps = {
  sidebarOpen: boolean
  toggleSidebar: () => void
}

const Header: FC<HeaderProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <HamburgerButton
            isOpen={!!sidebarOpen}
            onClick={() => {
              toggleSidebar()
            }}
          />
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width="32"
              height="32"
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <form>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-4 pr-9 focus:outline-none"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2">
                <CiSearch className="h-6 w-6 fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotifications />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          {/* <DropdownUser /> */}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}

export default Header
