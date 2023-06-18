import type { FC, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type DropdownMessageProps = {
  image: string
  from: string
  text: ReactNode
  date: string
}

const DropdownMessage: FC<DropdownMessageProps> = ({
  image,
  from,
  text,
  date,
}) => {
  return (
    <li>
      <Link
        className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
        href="/messages"
      >
        <div className="h-12.5 w-12.5 rounded-full">
          <Image src={image} alt="User" width="50" height="50" />
        </div>

        <div>
          <h6 className="text-sm font-medium text-black dark:text-white">
            {from}
          </h6>
          <p className="text-sm">{text}</p>
          <p className="text-xs">{date}</p>
        </div>
      </Link>
    </li>
  )
}

export default DropdownMessage
