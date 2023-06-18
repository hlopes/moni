import type { FC, PropsWithChildren } from 'react'
import type { LinkProps } from 'next/link'
import Link from 'next/link'

type DropdownNotificationProps = PropsWithChildren &
  LinkProps & {
    date: string
  }

const DropdownNotification: FC<DropdownNotificationProps> = ({
  href,
  children,
  date,
}) => {
  return (
    <li>
      <Link
        className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
        href={href}
      >
        <p className="text-sm">{children}</p>
        <p className="text-xs">{date}</p>
      </Link>
    </li>
  )
}

export default DropdownNotification
