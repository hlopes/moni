import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useOnClickOutside, useEventListener } from 'usehooks-ts'
import classNames from 'classnames'
import {
  CiCircleChevDown,
  CiLogout,
  CiMemoPad,
  CiSettings,
  CiUser,
} from 'react-icons/ci'

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdown = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdown, () => setDropdownOpen(false))

  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!dropdownOpen || key !== 'Escape') {
      return
    }

    setDropdownOpen(false)
  }

  useEventListener('keydown', keyHandler)

  return (
    <div className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-9 w-9 rounded-full">
          <Image
            src="/images/user/user-01.png"
            alt="User"
            width={48}
            height={48}
          />
        </span>

        <CiCircleChevDown
          className={classNames('hidden h-6 w-6 fill-current sm:block', {
            ['rotate-180']: dropdownOpen,
          })}
        />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        className={classNames(
          'absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark',
          { ['hidden']: !dropdownOpen, ['block']: dropdown }
        )}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <CiUser className="h-6 w-6 fill-current " />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <CiMemoPad className="h-6 w-6 fill-current" />
              My Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <CiSettings className="h-6 w-6 fill-current" />
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
          <CiLogout className="h-6 w-6 fill-current" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
