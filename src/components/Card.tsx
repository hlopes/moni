import type { FC, ReactNode } from 'react'
import { CiSaveDown1, CiSaveUp1 } from 'react-icons/ci'

type CardProps = {
  value: string
  label: string
  percentage: number
  icon: ReactNode
}

const Card: FC<CardProps> = ({ value, label, percentage, icon }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {value}
          </h4>
          <span className="text-sm font-medium">{label}</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          {percentage}%
          {percentage > 0 ? (
            <CiSaveUp1 className="h-6 w-6 fill-meta-3" />
          ) : null}
          {percentage < 0 ? (
            <CiSaveDown1 className="h-6 w-6 fill-meta-3" />
          ) : null}
        </span>
      </div>
    </div>
  )
}

export default Card
