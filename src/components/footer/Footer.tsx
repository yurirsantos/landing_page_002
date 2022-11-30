import React from 'react'
import { ButtonWithBackground } from '../buttons/Buttons'
import googlePlay from '../../assets/googlePlay.png'
import appleStore from '../../assets/appleStore.png'
import facebookIconName from '../../assets/facebookIconName.png'
import voluumDsp from '../../assets/voluumDsp.png'
import telegramIconName from '../../assets/telegramIconName.png'
import logoMaskGroup from '../../assets/logoMaskGroup.png'
import facebookIcon from '../../assets/facebookIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import youTubeIcon from '../../assets/youTubeIcon.png'

export function Footer() {
  const companyItems = [
    {
      title: 'About Us'
    },
    {
      title: 'Become a partner'
    },
    {
      title: 'Referral Program'
    },
    {
      title: 'Contact Us'
    }
  ]
  const featuresItems = [
    {
      title: 'Automizer'
    },
    {
      title: 'Traffic Distribution Al'
    },
    {
      title: 'Anti-Fraud Kit'
    },
    {
      title: 'Mobile Notifications'
    },
    {
      title: 'Collaboration Tools'
    }
  ]
  const integrationsItems = [
    {
      title: 'Taboola'
    },
    {
      title: 'MGID'
    },
    {
      title: 'Revcontent'
    },
    {
      title: 'PropellerAds'
    },
    {
      title: 'ExoClick'
    },
    {
      title: 'Zeropark'
    },
    {
      title: 'Outbrain'
    },
    {
      title: 'Content.ad'
    },
    {
      title: 'Adsterra'
    },
    {
      title: 'TrafficJunky'
    },
    {
      title: 'And More!'
    }
  ]
  const resourcesItems = [
    {
      title: 'Beginner AM Guide'
    },
    {
      title: 'Webinars'
    },
    {
      title: 'Video Tutorials'
    },
    {
      title: 'Documentation'
    },
    {
      title: 'Case Studies'
    },
    {
      title: 'Trackers Comparison'
    },
    {
      title: 'Blog'
    },
    {
      title: 'Affiliate Networks'
    },
    {
      title: 'Change Log'
    }
  ]

  return (
    <footer className="bg-gradient-to-tr to-[#9A54EA] from-[#1A104E] p-16">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div>
          <h1 className="text-4xl text-white font-bold w-[500px] mb-5">
            Control all your advertising from just one platform!
          </h1>
          <ButtonWithBackground title="GET STARTED" link="/" />
        </div>

        <div>
          <p className="text-base text-white font-thin mb-4">TRACK ON THE GO</p>
          <div className="flex justify-center items-center gap-5">
            <img
              src={googlePlay}
              className="h-[55px] w-[160px] hover:scale-110 duration-200"
            />
            <img
              src={appleStore}
              className="h-[55px] w-[160px] hover:scale-110 duration-200"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#6B6B6B] mt-16 mb-5" />

      <div className="lg:flex lg:justify-between lg:items-start lg:gap-96 mt-16">
        <div>
          <p className="text-[#a9a8a8] text-base">BUY NATIVE TRAFFIC</p>
          <img
            src={voluumDsp}
            className="mt-5 mb-5 hover:scale-110 duration-200"
          />
          <p className="text-[#a9a8a8] text-base">
            JOIN OUR COMMUNITIES OF AFFILIATES ON
          </p>
          <div className="flex justify-start items-center gap-5 mt-5">
            <img
              src={facebookIconName}
              className="hover:scale-110 duration-200"
            />
            <img
              src={telegramIconName}
              className="hover:scale-110 duration-200"
            />
          </div>
        </div>

        <div className="text-white lg:flex lg:justify-end lg:items-start lg:gap-16">
          <div>
            <h1 className="font-bold">COMPANY</h1>

            {companyItems.map(companyItem => {
              return (
                <h1 className="font-thin mt-2 mb-2 text-[#a9a8a8] hover:text-white cursor-pointer">
                  {companyItem.title}
                </h1>
              )
            })}
          </div>

          <div>
            <h1 className="font-bold">FEATURES</h1>

            {featuresItems.map(featureItem => {
              return (
                <h1 className="font-thin mt-2 mb-2 text-[#a9a8a8] hover:text-white cursor-pointer">
                  {featureItem.title}
                </h1>
              )
            })}
          </div>

          <div>
            <h1 className="font-bold">INTEGRATIONS</h1>

            {integrationsItems.map(integrationItem => {
              return (
                <h1 className="font-thin mt-2 mb-2 text-[#a9a8a8] hover:text-white cursor-pointer">
                  {integrationItem.title}
                </h1>
              )
            })}
          </div>

          <div>
            <h1 className="font-bold">RESOURCES</h1>

            {resourcesItems.map(resourceItem => {
              return (
                <h1 className="font-thin mt-2 mb-2 text-[#a9a8a8] hover:text-white cursor-pointer">
                  {resourceItem.title}
                </h1>
              )
            })}
          </div>
        </div>
      </div>

      <img src={logoMaskGroup} className="hover:scale-110 duration-200" />

      <div className="w-full h-[1px] bg-[#6B6B6B] mt-16 mb-5" />

      <div className="lg:flex lg:justify-between lg:items-center mt-10">
        <h1 className="text-base text-[#a9a8a8]">
          © Voluum by CentralNic 2015-2021
        </h1>

        <div className="lg:flex lg:justify-end lg:items-center lg:gap-6 text-[#a9a8a8] text-base">
          <h3 className="hover:text-white">End User Privacy Policy</h3>
          <h3 className="hover:text-white">Privacy Policy</h3>
          <h3 className="hover:text-white">Cookies policy</h3>
          <h3 className="hover:text-white">Terms & Conditions</h3>
          <h3 className="hover:text-white">DPA</h3>
          <h3 className="hover:text-white">Security</h3>

          <img
            src={facebookIcon}
            className="w-8 h-8 hover:scale-125 duration-200"
          />
          <img
            src={linkedinIcon}
            className="w-8 h-8 hover:scale-125 duration-200"
          />
          <img
            src={youTubeIcon}
            className="w-8 h-8 hover:scale-125 duration-200"
          />
        </div>
      </div>
    </footer>
  )
}
