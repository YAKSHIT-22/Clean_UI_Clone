import React from 'react'

export default function Button({title,divClass,pClass}) {
  return (
    <div className={`flex items-center h-full w-full justify-center bg-[#8873EF] p-2 sm:p-3 rounded-[4px] cursor-pointer ${divClass}`}>
    <p className={`lg:text-[.8rem] text-white font-semibold whitespace-nowrap ${pClass}`}>{title}</p>
    </div>
  )
}
