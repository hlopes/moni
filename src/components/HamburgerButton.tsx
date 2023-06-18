import type { FC, MouseEventHandler } from 'react'
import classNames from 'classnames'

type HamburgerProps = {
  isOpen: boolean
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

const HamburgerButton: FC<HamburgerProps> = ({ isOpen = false, onClick }) => {
  return (
    <button
      aria-controls="sidebar"
      onClick={onClick}
      className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
    >
      <span className="relative block h-5.5 w-5.5 cursor-pointer">
        <span className="du-block absolute right-0 h-full w-full">
          <span
            className={classNames(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white',
              { ['!w-full delay-300']: !isOpen }
            )}
          ></span>
          <span
            className={classNames(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white',
              { ['delay-400 !w-full']: !isOpen }
            )}
          ></span>
          <span
            className={classNames(
              'relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white',
              { ['!w-full delay-500']: !isOpen }
            )}
          ></span>
        </span>
        <span className="absolute right-0 h-full w-full rotate-45">
          <span
            className={classNames(
              'absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white',
              { ['!h-0 !delay-[0]']: !isOpen }
            )}
          ></span>
          <span
            className={classNames(
              'delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white',
              { ['!h-0 !delay-200']: !isOpen }
            )}
          ></span>
        </span>
      </span>
    </button>
  )
}

export default HamburgerButton
