import React from 'react'
import {
  ButtonTransparent,
  ButtonWithBackground
} from '../../components/buttons/Buttons'
import macBookImage from '../../assets/macBookImage.png'
import celos from '../../assets/celos.png'
import googleAds from '../../assets/googleAds.png'
import facebook from '../../assets/facebook.png'
import propellerAds from '../../assets/propellerAds.png'
import tabLa from '../../assets/tabLa.png'
import exoClick from '../../assets/exoClick.png'
import outBraian from '../../assets/outBraian.png'
import mgid from '../../assets/mgid.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import appleStore from '../../assets/appleStore.png'
import googlePlay from '../../assets/googlePlay.png'

export function Home() {
  const imagesClients = [
    {
      src: googleAds
    },
    {
      src: facebook
    },
    {
      src: propellerAds
    },
    {
      src: tabLa
    },
    {
      src: exoClick
    },
    {
      src: outBraian
    },
    {
      src: mgid
    }
  ]

  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div className="bg-gradient-to-br from-[#CB10A6] to-[#1A104E] lg:h-[880px] z-0 text-center text-white pt-10">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="mt-5 mb-5">The all-in-one affiliate software</h1>
              <h1 className="text-5xl font-bold mt-7 mb-7">
                Track, Optimize & Automate
              </h1>
              <p className="w-2/3 m-auto mt-7 mb-7">
                your advertising with affiliate tracking software recommended by
                digital marketers from around the globe!
              </p>
            </div>
          </div>
          <ButtonTransparent title="VIEW DEMO" link="/" />
          <ButtonWithBackground title="GET STARTED" link="/" />
        </div>

        <div className="relative z-10 -mt-[400px] bg-white w-11/12 m-auto rounded-md mb-16 pb-10">
          <div className="flex justify-center items-center">
            <img
              src={macBookImage}
              className="relative z-10 -mt-[140px] hover:scale-110 duration-200"
            />
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center">
              <img src={celos} className="hover:scale-110 duration-200" />
            </div>
            <h1 className="font-bold text-3xl">
              Integrated with 40+ Traffic sources
            </h1>

            <div className="lg:flex lg:justify-center lg:items-center lg:gap-20 lg:mt-5">
              {imagesClients.map(imageClient => {
                return (
                  <img
                    src={imageClient.src}
                    className="hover:scale-125 duration-200"
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center pb-14">
          <div className="lg:w-[30%] pl-14 lg:mr-14">
            <h1 className="text-[#CB10A6] mt-5 mb-5 text-lg">
              Campaign Optimisation
            </h1>
            <h1 className="font-bold text-2xl mt-5 mb-5">
              Cookie-less tracking & conversion attribution
            </h1>
            <p className="text-[#6B6B6B] mt-5 w-[80%] text-xl">
              Forget cookie-dependent pixels. Use reliable server–to–server
              postbacks to get conversion data, distinguish between various
              conversion types and even pass them to your traffic source!
            </p>
            <p className="text-[#6B6B6B] mt-2 mb-5 w-[80%] text-xl">
              Determine which ad variation, lander, or offer brought you
              conversions and effortlessly optimize your campaign flows for even
              more.
            </p>
            <div className="lg:flex lg:justify-start lg:items-center lg:gap-5">
              <img src={appleStore} className="hover:scale-125 duration-200" />
              <img src={googlePlay} className="hover:scale-125 duration-200" />
            </div>
          </div>
          <img
            src={image1}
            className="bg-[#9A54EA] p-32 rounded-md hover:scale-105 duration-200"
          />
        </div>

        <div className="bg-white p-28 mt-10">
          <h1 className="font-bold text-4xl text-center">
            Improve your ad performance with our affiliate marketing software
          </h1>

          <div className="lg:flex lg:justify-center lg:items-center mt-10">
            <div className="bg-[#9A54EA] text-white p-5 w-56 text-center text-lg mr-[2px] rounded-tl-lg">
              <h1>Track</h1>
            </div>
            <div className="bg-[#9A54EA]/40 p-5 w-56 text-center text-lg ml-[2px] mr-[2px]">
              <h1>Optimize</h1>
            </div>
            <div className="bg-[#9A54EA]/40 p-5 w-56 text-center text-lg ml-[2px] rounded-tr-lg">
              <h1>Automate</h1>
            </div>
          </div>

          <div className="bg-[#F9F5FF] w-10/12 m-auto rounded-2xl">
            <div className="lg:flex lg:justify-center lg:items-center pb-14">
              <div className="lg:w-[30%] pl-14 lg:mr-14">
                <h1 className="text-[#CB10A6] mt-5 mb-5 text-lg">
                  AFFILIATE MARKETING TRACKING
                </h1>
                <h1 className="font-bold text-2xl mt-5 mb-5">
                  Track everything in one place
                </h1>
                <p className="text-[#6B6B6B] mt-5 w-[80%] text-xl">
                  What kind of ads do you run? Native, display, pop, email,
                  search, push, social, video? Paid or organic? Voluum affiliate
                  tracker lets you track it all! With or without redirects.{' '}
                </p>
                <p className="text-[#6B6B6B] mt-2 mb-5 w-[80%] text-xl">
                  Thanks to our superfast reporting you can easily monitor over
                  30 metrics about each visit, click, and conversion coming from
                  all of your traffic sources – with one tool and in real time!
                </p>
                <div className="lg:flex lg:justify-start lg:items-center lg:gap-5">
                  <ButtonWithBackground title="VIEW CASE STUDIES" link="/" />
                </div>
              </div>
              <img src={image2} className="hover:scale-105 duration-200" />
            </div>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center mt-28">
            <h1 className="font-bold text-2xl mt-5 mb-5 lg:w-80">
              Features so good, they will change the way you do affiliate
              marketing
            </h1>
            <ButtonWithBackground title="SEE ALL FEATURES" link="/" />
          </div>
        </div>
      </div>
    </>
  )
}
