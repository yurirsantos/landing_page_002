import React from 'react'
import {
  ButtonTransparent,
  ButtonWithBackground
} from '../../components/buttons/Buttons'
import { Footer } from '../../components/footer/Footer'

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
import image3 from '../../assets/image3.png'
import appleStore from '../../assets/appleStore.png'
import googlePlay from '../../assets/googlePlay.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import people1 from '../../assets/people1.png'
import people2 from '../../assets/people2.png'
import logoAffLift from '../../assets/logoAffLift.png'
import video1 from '../../assets/video1.png'
import clickBank from '../../assets/clickBank.png'
import exoClickColors from '../../assets/exoClickColors.png'
import propellerAdsColors from '../../assets/propellerAdsColors.png'
import mobidea from '../../assets/mobidea.png'
import stm from '../../assets/stm.png'
import adSociaty from '../../assets/adSociaty.png'
import affiliateFix from '../../assets/affiliateFix.png'
import affLift from '../../assets/affLift.png'
import { Navbar } from '../../components/navbar/Navbar'

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
  const cardsFeatures = [
    {
      icon: icon1,
      title: 'Automizer',
      new: true,
      paragraph:
        'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
      learnMore: 'Learn More'
    },
    {
      icon: icon2,
      title: 'Traffic distribution AI',
      new: false,
      paragraph:
        'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
      learnMore: 'Learn More'
    },
    {
      icon: icon3,
      title: 'Anti-Fraud Kit',
      new: false,
      paragraph:
        'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
      learnMore: 'Learn More'
    },
    {
      icon: icon4,
      title: 'Alerts',
      new: false,
      paragraph:
        'Integrate all your traffic sources with Voluum and set up custom rules ro auto-optimize your campaigns',
      learnMore: 'Learn More'
    }
  ]
  const clientsImage = [
    {
      src: clickBank
    },
    {
      src: exoClickColors
    },
    {
      src: propellerAdsColors
    },
    {
      src: mobidea
    }
  ]
  const clientsImageTwo = [
    {
      src: stm
    },
    {
      src: adSociaty
    },
    {
      src: affiliateFix
    },
    {
      src: affLift
    }
  ]

  return (
    <>
      <Navbar />

      <div className="bg-[#E5E5E5] lg:pt-16 pt-10">
        <div className="bg-gradient-to-br from-[#CB10A6] to-[#1A104E] lg:h-[880px] h-[950px] z-0 text-center text-white pt-10">
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

            <div className="lg:flex lg:justify-center lg:items-center lg:gap-20 lg:mt-5 w-max m-auto mt-10">
              {imagesClients.map(imageClient => {
                return (
                  <img
                    src={imageClient.src}
                    className="hover:scale-125 duration-200 lg:mt-0 lg:mb-0 mt-5 mb-5 w-max m-auto"
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center lg:p-0 p-8 pb-14">
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
            <div className="flex justify-start items-center gap-5 lg:mt-0 lg:mb-0 mt-8 mb-14">
              <img src={appleStore} className="hover:scale-125 duration-200" />
              <img src={googlePlay} className="hover:scale-125 duration-200" />
            </div>
          </div>
          <img
            src={image1}
            className="bg-[#9A54EA] lg:p-32 p-14 rounded-md hover:scale-105 duration-200"
          />
        </div>

        <div className="bg-white lg:p-28 p-16 mt-10">
          <h1 className="font-bold lg:text-4xl text-2xl text-center">
            Improve your ad performance with our affiliate marketing software
          </h1>

          <div className="flex justify-center items-center mt-10">
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

          <div className="bg-[#F9F5FF] lg:w-10/12 m-auto rounded-2xl">
            <div className="lg:flex lg:justify-center lg:items-center pb-14">
              <div className="lg:w-[30%] lg:pl-14 pl-3 lg:mr-14">
                <h1 className="text-[#CB10A6] mt-5 mb-5 lg:text-lg text-base lg:pt-0 pt-7 text-justify">
                  AFFILIATE MARKETING TRACKING
                </h1>
                <h1 className="font-bold lg:text-2xl text-xl mt-5 mb-5 text-justify">
                  Track everything in one place
                </h1>
                <p className="text-[#6B6B6B] mt-5 w-[80%] lg:text-xl text-lg text-justify">
                  What kind of ads do you run? Native, display, pop, email,
                  search, push, social, video? Paid or organic? Voluum affiliate
                  tracker lets you track it all! With or without redirects.
                </p>
                <p className="text-[#6B6B6B] mt-2 mb-5 w-[80%] lg:text-xl text-lg text-justify">
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

          <div className="lg:flex lg:justify-center lg:items-center lg:gap-12 mt-16">
            {cardsFeatures.map(cardFeature => {
              return (
                <div className="bg-white rounded-md shadow-2xl p-5 w-max m-auto lg:mb-0 mb-8 hover:scale-105 duration-200">
                  <img
                    src={cardFeature.icon}
                    className="h-20 w-20 bg-[#F9F5FF] p-2 rounded-full mt-5 mb-5"
                  />
                  <div className="flex justify-start items-center">
                    <h1 className="font-bold text-lg">{cardFeature.title}</h1>
                    {cardFeature.new ? (
                      <span className="ml-3 bg-[#CB10A6]/20 text-[#CB10A6] text-xs p-1 pl-2 pr-2 rounded-sm">
                        NEW
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <p className="text-[#6B6B6B] mt-4 mb-4 w-72 text-base">
                    {cardFeature.paragraph}
                  </p>
                  <h2 className="text-[#CB10A6] mt-5 mb-5 text-lg cursor-pointer">
                    {cardFeature.learnMore}
                  </h2>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center">
          <img src={people1} className="lg:h-[800px] h-[470px]" />
          <div className="text-white bg-[#2ACDED] lg:h-[800px] h-[470px] p-16">
            <p className="font-bold mt-16 text-base">
              I used nearly every tracking tool on the market and I always come
              back to Voluum. It provides the most user-friendly interface and
              has the in-depth reporting features I need.
            </p>
            <p className="font-bold mt-5 mb-5 text-base">Luke Kling </p>
            <p className="text-base">Affiliate Community Leader</p>
            <img src={logoAffLift} />
          </div>
          <img src={people2} className="lg:h-[800px] lg:block hidden" />
        </div>

        <div className="bg-hero lg:w-[1088px] lg:h-[552px] w-[420px] h-max m-auto mt-16 pt-20 lg:pl-16 lg:pr-16 pb-16 pl-7 pr-7 rounded-md shadow-2xl">
          <div className="lg:flex lg:justify-center lg:items-center lg:gap-10">
            <img
              src={video1}
              className="rounded-md hover:scale-105 duration-200"
            />
            <div>
              <h1 className="text-[#CB10A6] mt-5 mb-5 text-lg lg:text-start text-center">
                AFFILIATE MARKETING TRACKING
              </h1>
              <h1 className="font-bold text-2xl mt-5 mb-5 lg:w-80 text-white lg:text-start text-center">
                An affiliate tracking platform made for affiliates, by
                affiliates
              </h1>
              <p className="text-[#6B6B6B] mt-5 text-xl mb-5 lg:text-start text-center">
                Watch a short video about an affiliate marketer who has inspired
                a team of 100+ creative minds to develop a truly game-changing
                ad tracking software.
              </p>
              <ButtonWithBackground title="GET TO KNOW US" link="/" />
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center lg:mt-32 mt-6 m-auto">
          <div className="lg:p-0 p-16 lg:mr-0 mr-16">
            <h1 className="text-[#CB10A6] mt-5 mb-5 text-lg">
              AFFILIATE MARKETING TRACKING
            </h1>
            <h1 className="font-bold text-2xl mt-5 mb-5 lg:w-80">
              Affiliate tracking made easy
            </h1>
            <p className="text-[#6B6B6B] mt-5 w-[80%] text-xl mb-5">
              You are in good hands! Our team provides tons of useful
              educational content for affiliate marketing tracking:
            </p>
            <ul className="list-disc text-[#6B6B6B] ml-5">
              <li>Video Tutorials</li>
              <li>Live Webinars</li>
              <li>Dedicated Support</li>
              <li>1on1 Onboarding</li>
              <li>Step-by-step Guides</li>
            </ul>
          </div>

          <div>
            <img
              src={image3}
              className="z-40 lg:absolute lg:w-[623px] lg:h-[592px] w-[352px] h-[296px] m-auto hover:scale-110 duration-200 rounded-lg"
            />
            <div className="lg:w-[623px] lg:h-[592px] ml-16 w-[312px] h-[296px] bg-[#9A54EA] lg:relative lg:mt-16 rounded-lg lg:block hidden" />
          </div>
        </div>

        <div className="bg-white lg:p-28 p-16 mt-10 text-center">
          <h1 className="text-4xl">
            We're a part of the affiliate community since 2015!
          </h1>

          <p className="text-[#6B6B6B] mt-16 text-xl mb-5">
            Official tracking partner of
          </p>

          <div className="lg:flex lg:justify-center lg:items-center lg:gap-16 w-max m-auto mb-16 mt-5">
            {clientsImage.map(clientImage => {
              return (
                <img
                  src={clientImage.src}
                  className="lg:mb-0 mb-7 hover:scale-110 duration-200"
                />
              )
            })}
          </div>

          <p className="text-[#6B6B6B] mt-5 text-xl mb-5">Find us on</p>

          <div className="lg:flex lg:justify-center lg:items-center lg:gap-16 w-max m-auto">
            {clientsImageTwo.map(clientImage => {
              return (
                <img
                  src={clientImage.src}
                  className="lg:mb-0 mb-7 hover:scale-110 duration-200"
                />
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
