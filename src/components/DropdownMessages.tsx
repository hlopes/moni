import { useRef, useState } from 'react'
import Link from 'next/link'
import { useOnClickOutside, useEventListener } from 'usehooks-ts'
import { CiChat1 } from 'react-icons/ci'
import classNames from 'classnames'

import DropdownMessage from './DropdownMessage'

const DropdownMessages = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdown = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdown, () => setDropdownOpen(false))

  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!dropdownOpen || key !== 'Escape') return
    setDropdownOpen(false)
  }

  useEventListener('keydown', keyHandler)

  return (
    <li className="relative" x-data="{ dropdownOpen: false, notifying: true }">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        href="#"
      >
        <span className="absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>

        <CiChat1 className="h-6 w-6 fill-current duration-300 ease-in-out" />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        className={classNames(
          'absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80',
          { ['block']: !!dropdownOpen, ['hidden']: !dropdownOpen }
        )}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <DropdownMessage
            image="/images/user/user-02.png"
            from="Mariya Desoja"
            text="I like your confidence 💪"
            date="2min ago"
          />
          <DropdownMessage
            image="/images/user/user-01.png"
            from="Robert John"
            text="Can you share your offer?"
            date="10min ago"
          />
          <DropdownMessage
            image="/images/user/user-03.png"
            from="Henry Dholi"
            text="I cam across your profile and..."
            date="1day ago"
          />
          <DropdownMessage
            image="/images/user/user-04.png"
            from="Cody Fisher"
            text="I’m waiting for you response!"
            date="5days ago"
          />
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  )
}

export default DropdownMessages
