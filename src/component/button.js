import React from 'react'

const Button = ({ val, grow = false, operator = false, clickAction }) => {
  return (
    <button
    onClick={() => clickAction(val)}
      className={`text-white text-2xl h-1/5 cursor-pointer border border-gray-900 hover:bg-gray-700 active:bg-gray-600
        ${grow ? 'flex-[2_0_42%]' : 'flex-[1_0_21%]'}
        ${grow && val === 0 ? 'flex-[3_0_63%]' : 'flex-[1_0_21%]'}
        ${operator ? 'bg-orange-400' : 'bg-gray-600'}
        ${val === 'C' && 'bg-cyan-600'}
      `}
    >
      {val}
    </button>
  )
}

export default Button
