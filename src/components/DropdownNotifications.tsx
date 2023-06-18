import { useRef, useState } from 'react'
import Link from 'next/link'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import classNames from 'classnames'
import { CiBellOn } from 'react-icons/ci'

import DropdownNotification from './DropdownNotification'

const DropdownNotifications = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdown = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdown, () => setDropdownOpen(false))

  const keyHandler = ({ key }: KeyboardEvent) => {
    if (!dropdownOpen || key !== 'Escape') return
    setDropdownOpen(false)
  }

  useEventListener('keydown', keyHandler)

  return (
    <li className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        href="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>

        <CiBellOn className="h-6 w-6 fill-current duration-300 ease-in-out" />
      </Link>

      <div
        ref={dropdown}
        className={classNames(
          'absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80',
          { ['hidden']: !dropdownOpen, ['block']: !!dropdownOpen }
        )}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <DropdownNotification href="#" date="12 May, 2025">
            <span className="text-black dark:text-white">
              Edit your information in a swipe
            </span>{' '}
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim.
          </DropdownNotification>
          <DropdownNotification href="#" date="24 Feb, 2025">
            <span className="text-black dark:text-white">
              It is a long established fact
            </span>{' '}
            that a reader will be distracted by the readable.
          </DropdownNotification>
          <DropdownNotification href="#" date="04 Jan, 2025">
            <span className="text-black dark:text-white">
              There are many variations
            </span>{' '}
            of passages of Lorem Ipsum available, but the majority have suffered
          </DropdownNotification>
          <DropdownNotification href="#" date="01 Dec, 2024">
            <span className="text-black dark:text-white">
              There are many variations
            </span>{' '}
            of passages of Lorem Ipsum available, but the majority have suffered
          </DropdownNotification>
        </ul>
      </div>
    </li>
  )
}

export default DropdownNotifications
