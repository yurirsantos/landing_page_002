import React from 'react'

type typesButtonAll = {
  title: string
  link: string
  onClick?: any
  plusStyleButton?: string
}

export function ButtonWithBackground(props: typesButtonAll) {
  const styleButtonWithBackground =
    'bg-[#CB10A6] p-2 rounded-full lg:h-14 lg:w-max pl-5 pr-5 text-white text-sm m-2 hover:scale-110 hover:bg-[#1A104E] duration-200 '

  return (
    <a href={props.link} className="">
      <button
        onClick={props.onClick}
        className={styleButtonWithBackground + props.plusStyleButton}
      >
        {props.title}
      </button>
    </a>
  )
}

export function ButtonTransparent(props: typesButtonAll) {
  const styleButtonTransparent =
    'bg-transparent border border-white p-2 rounded-full lg:h-14 lg:w-36 text-white text-sm m-2 hover:scale-110 hover:bg-white hover:text-black duration-200 '

  return (
    <a href={props.link}>
      <button
        onClick={props.onClick}
        className={styleButtonTransparent + props.plusStyleButton}
      >
        {props.title}
      </button>
    </a>
  )
}
