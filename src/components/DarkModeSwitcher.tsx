import classNames from 'classnames'
import { CiDark, CiLight } from 'react-icons/ci'
import useColorMode from '~/hooks/useColorMode'

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <li>
      <label
        className={classNames('relative m-0 block h-7.5 w-14 rounded-full', {
          ['bg-primary']: colorMode === 'dark',
          ['bg-stroke']: colorMode !== 'dark',
        })}
      >
        <input
          type="checkbox"
          onChange={() => {
            if (typeof setColorMode === 'function') {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }
          }}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={classNames(
            'absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear',
            { ['!right-[3px] !translate-x-full']: colorMode === 'dark' }
          )}
        >
          <span className="dark:hidden">
            <CiLight />
          </span>
          <span className="hidden dark:inline-block">
            <CiDark />
          </span>
        </span>
      </label>
    </li>
  )
}

export default DarkModeSwitcher
