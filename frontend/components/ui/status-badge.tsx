import React from 'react'

interface StatusBadgeProps {
  value: string;
}

const StatusBadge = ({value}: StatusBadgeProps) => {
    const className = value === 'pending' ? 'border-yellow-300 text-yellow-400' : value === 'successed' ? 'border-green-400 text-green-400' : 'border-red-400 text-red-400'
  return (

        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full border-2 ${className}`}>
            {value}
        </span>
  )
}

export default StatusBadge