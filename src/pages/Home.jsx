import React, { useEffect, useRef, useState } from 'react'
import location_city from "../assets/images/location-city.svg"
import ProductCard from '../components/hoc/ProductCard'

const categories = [
  'Cricket',
  'Football',
  'Badminton',
  'Running',
  'Cycling',
  'Swimming',
  'Fitness',
  'Sportswear',
]

const locations = [
  'Ahmedabad',
  'Surat',
  'Vadodara',
  'Rajkot'
]

function Home() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('Select Category')
  const menuRef = useRef()
  const [locOpen, setLocOpen] = useState(false)
  const [locSelected, setLocSelected] = useState('Ahmedabad')
  const locRef = useRef()

  useEffect(() => {
    function onDoc(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
      if (locRef.current && !locRef.current.contains(e.target)) setLocOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])
  return (
    <>
      <section className='hero'>
        <div className=" container">
          <h1 className='hero_head'>Find Everything <br />
            You Need in Sports & Fitness — In One Place</h1>
          <p className='hero_para'>From venues to equipment, discover verified providers near you.</p>
        </div>
      </section>

      <section className='search_parent'>
        <div className="container">
          <div className="search_main">
            <div className='search_left'>
              <img src={location_city} alt="location" />
              <div className="search_left_child">
                <u>Location</u>
                <div className="loc-dropdown" ref={locRef}>
                  <button className={"loc-trigger" + (locOpen ? ' open' : '')} onClick={() => setLocOpen(v => !v)} aria-expanded={locOpen}>
                    <span className="cat-label">{locSelected}</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3501 0.5L5.92505 5.92505L0.5 0.5" stroke="#333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {locOpen && (
                    <ul className="cat-menu loc-menu" role="listbox">
                      {locations.map(loc => (
                        <li key={loc} className={loc === locSelected ? 'active' : ''} onClick={() => { setLocSelected(loc); setLocOpen(false) }} role="option" aria-selected={loc === locSelected}>
                          <span>{loc}</span>
                          {loc === locSelected && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className='search_center'>
              <input type="search" placeholder='What are you looking for?' />
              <div className="seg category" ref={menuRef}>
                <button className={"cat-trigger" + (open ? ' open' : '')} aria-expanded={open} onClick={() => setOpen(v => !v)}>
                  <span className="cat-label">{selected}</span>
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3501 0.5L5.92505 5.92505L0.5 0.5" stroke="#333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {open && (
                  <ul className="cat-menu" role="listbox">
                    {categories.map(cat => (
                      <li key={cat} className={cat === selected ? 'active' : ''} onClick={() => { setSelected(cat); setOpen(false) }} role="option" aria-selected={cat === selected}>
                        <span>{cat}</span>
                        {cat === selected && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className='search_right'>
              <button className='serach_btn'>
                <span>Search</span>
                <span><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.89551 0C13.8083 0 17.7909 3.86206 17.791 8.62598C17.791 10.5847 17.1167 12.3899 15.9824 13.8379L21.4219 18.335C21.7409 18.5989 21.7844 19.0724 21.5205 19.3916C21.2565 19.7104 20.7839 19.756 20.4648 19.4922L14.9561 14.9365C13.3674 16.3718 11.2381 17.252 8.89551 17.252C3.98279 17.2517 0 13.3899 0 8.62598C0.000163416 3.86221 3.98289 0.000240409 8.89551 0ZM8.89551 1.5C4.76749 1.50024 1.50016 4.7338 1.5 8.62598C1.5 12.5183 4.76738 15.7517 8.89551 15.752C13.0238 15.752 16.291 12.5184 16.291 8.62598C16.2909 4.73366 13.0237 1.5 8.89551 1.5Z" fill="white" />
                </svg>
                </span>
              </button>
            </div>
          </div>
          {/* <SearchBar/> */}
        </div>
      </section>

      <section>
        <div className=" container-fluid">
          <div className='mb_50'>
            <h2 className='title_64 mb-3'><span className='heade_dot'>•</span> Popular Venues Near You</h2>
            <p className='title_24'>Top-rated sports facilities around your location</p>
          </div>
          <div className="row">

            {
              [...Array(4)].map(() => (
                <div className='col-3'>
                  <ProductCard />
                </div>
              ))
            }

          </div>
        </div>
      </section>


    </>
  )
}

export default Home;
