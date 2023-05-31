import React, { useState } from 'react'
import { portfolioData } from '../../assets/data/portfolioData'
import './portfolioGallery.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'


const PortfolioGallery = () => {
  const [modal, setModal] = useState(false)
  const [filteredData, setFilteredData] = useState(portfolioData.filter((item) => item.category === 'web'))
  const [data, setData] = useState({})

  let filterData = (categoryName) => {
    let data = portfolioData.filter((item) => item.category === categoryName)
    setFilteredData(data)
  }


  let getImage = (index) => {
    setModal(true)
    let img = filteredData[index].img
    let newData = {
      index,
      img
    }
    setData(newData)
    // document.body.style.overflow = 'hidden';
  }

  let changeSlide = (index) => {
    let img = filteredData[index].img
    let newData = {
      index,
      img
    }
    setData(newData)
  }

  let closeModal = () => {
    setModal(false)
    // document.body.style.overflow = 'unset';
  }

  return (
    <div className='portfolio-wrapper'>

      {/* NAVBAR */}
      <ul className='nav'>
        <li onClick={() => filterData('web')}>Website Design</li>
        <li onClick={() => filterData('logo')}>Logos</li>
        <li onClick={() => filterData('app')}>App Design</li>
        <li onClick={() => filterData('digital')}>Digital Marketing</li>
        <li onClick={() => filterData('branding')}>Branding</li>
        <li onClick={() => filterData('animation')}>Animation</li>
      </ul>

      <div className='gallery'>
        {
          filteredData.map((item, index) => (
            <div key={index} className={`portfolio-card  ${index === 0 || index === 7 ? 'big-img' : ''}`} onClick={() => getImage(index)}>
              <img src={item.img} alt={index} />
            </div>
          ))
        }
      </div>

      <Link to={'/contact'} className='reach-btn'>Reach Out to Us</Link>


      {/* MODAL START*/}
      {
        modal &&
        <div className='img-modal'>
          <AiOutlineClose className='close' onClick={() => closeModal()} />
          <BiLeftArrow className='arr-left' onClick={() => changeSlide(data.index -= 1)} />
          <p>
            {
              `${data.index + 1}  / ${filteredData.length} `
            }
          </p>
          <div className="img">
            <img src={data.img} alt="data.index" />
          </div>
          <BiRightArrow className='arr-right' onClick={() => changeSlide(data.index += 1)} />
        </div>
      }
      {/* MODAL END */}
    </div>
  )
}

export default PortfolioGallery
