import React from 'react'
import location_city from "../assets/images/location-city.svg"

function Home() {
  return (
    <>
      <section className='hero'>
        <div className="container-fuild">
          <h1 className='hero_head'>Find Everything <br />
            You Need in Sports & Fitness — In One Place</h1>
          <p className='hero_para'>From venues to equipment, discover verified providers near you.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="search_main">
            <div className='d-flex'>
              <img src={location_city} alt="location" />
              <div>
                <u>Location</u>
                <select>
                  <option>Ahmedabad</option>
                  <option>Ahmedabad</option>
                </select>
              
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Home