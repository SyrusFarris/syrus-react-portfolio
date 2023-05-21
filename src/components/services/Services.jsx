import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Landing Page</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Customized landing pages designed to meet your business or personal needs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive design that ensures your landing page looks great across all devices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast Loading pages that keep your visitors engaged</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO content that helps rank your website higher in search results</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Revisions until you are completely satisfied with your website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Regular maintenance to ensure you landing page is always up-to-date and functioning properly* </p>
            </li>
          </ul>
        </article>
        {/* End of Landing Page */}

        <article className="service">
          <div className="service__head">
            <h3>Pricing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$500 - Single page website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>$100 - Per additional page</p>
            </li>
            <li>
              <p>If you want to hire me to continously update the website over time we can discuss the pricing of a retainer agreement. Through a retainer agreement you can hire me to dedicate a specific amount of hours per month to up date the site at an hourly rate. Granting you more time to focus on your business' needs and goals </p>
            </li>
          </ul>
        </article>
        {/* End of this section lol */}
      </div>
    </section>
  )
}

export default Services