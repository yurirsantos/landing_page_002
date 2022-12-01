import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import { ButtonBorder, ButtonWithBackground } from '../buttons/Buttons'
import { List } from 'phosphor-react'

export function Navbar() {
  const itemsMenu = [
    {
      title: 'Product'
    },
    {
      title: 'Pricing'
    },
    {
      title: 'Integrations'
    },
    {
      title: 'Resources'
    },
    {
      title: 'Company'
    }
  ]
  const [hiddenMenu, setHiddenMenu] = useState(
    'hidden animate-in slide-in-from-top duration-500'
  )
  const styleMenuItemsMobile =
    'lg:hidden hover:font-bold duration-200 cursor-pointer ' + hiddenMenu

  return (
    <nav className="p-3 w-full bg-white fixed z-50">
      <ul className="flex lg:justify-center justify-between items-center lg:gap-52">
        <img
          src={logo}
          className="lg:h-max lg:w-max h-[50px] w-[140px] hover:scale-110 duration-200"
        />

        <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 text-lg hidden">
          {itemsMenu.map(itemMenu => {
            return (
              <li className="hover:font-bold duration-200 cursor-pointer">
                {itemMenu.title}
              </li>
            )
          })}
          <div className="lg:ml-32 hover:font-bold duration-200 cursor-pointer">
            <ButtonBorder title="VIEW DEMO" link="/" />
            <ButtonWithBackground title="GET STARTED" link="/" />
          </div>
        </div>

        <span
          className=""
          onClick={() => {
            if (
              hiddenMenu == 'hidden animate-in slide-in-from-top duration-500'
            ) {
              setHiddenMenu('block animate-in slide-in-from-top duration-500')
            } else {
              setHiddenMenu('hidden animate-in slide-in-from-top duration-500')
            }
          }}
        >
          <List
            size={32}
            className="lg:hidden block hover:scale-105 hover:bg-black hover:text-white rounded-md duration-200 cursor-pointer"
          />
        </span>
      </ul>
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 text-lg w-max m-auto">
        {itemsMenu.map(itemMenu => {
          return (
            <li
              className={
                styleMenuItemsMobile +
                ' hover:bg-gray-100 duration-200 p-6 rounded-md'
              }
            >
              {itemMenu.title}
            </li>
          )
        })}
        <div className={styleMenuItemsMobile + ' lg:ml-32'}>
          <ButtonBorder title="VIEW DEMO" link="/" />
          <ButtonWithBackground title="GET STARTED" link="/" />
        </div>
      </div>
    </nav>
  )
}
