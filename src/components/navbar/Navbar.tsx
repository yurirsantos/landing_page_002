import React from 'react'
import logo from '../../assets/Logo.png'
import { ButtonBorder, ButtonWithBackground } from '../buttons/Buttons'

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

  return (
    <nav className="p-3">
      <ul className="lg:flex lg:justify-center lg:items-center lg:gap-52">
        <img src={logo} className="hover:scale-110 duration-200" />

        <div className="lg:flex lg:justify-center lg:items-center lg:gap-5 text-lg">
          {itemsMenu.map(itemMenu => {
            return (
              <li className="hover:font-bold duration-200 cursor-pointer">
                {itemMenu.title}
              </li>
            )
          })}
        </div>

        <div>
          <ButtonBorder title="VIEW DEMO" link="/" />
          <ButtonWithBackground title="GET STARTED" link="/" />
        </div>
      </ul>
    </nav>
  )
}
