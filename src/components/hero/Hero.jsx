import React from 'react'
import './hero.scss'
import Carousel from 'react-elastic-carousel'

const Hero = () => {
    const slides = [
        {
            id: 1,
            head: 'Website Designs',
            main: 'Make a long-lasting first impression',
            foot: "Whether you prefer a clean and simple design or a visually captivating one, Code And Design Group possesses the skills to provide your website with a polished and professional look"
        },
        {
            id: 2,
            head: 'Mobile App Development',
            main: 'Give your business a competitive edge',
            foot: "By developing mobile applications that prioritize user-friendliness on both Android and iOS platforms, you can establish a compelling advantage for your brand, making it the preferred choice among customers"
        },
        {
            id: 3,
            head: 'User Experience & Design',
            main: 'Create experiences that people enjoy',
            foot: "Our expertise in user experience and design services has proven invaluable in assisting numerous businesses in overcoming their product design challenges"
        },
    ]

    return (
        <div className='hero'>
            <div className='slider'>
                <Carousel itemsToShow={1} showArrows={false}>
                    {
                        slides.map(
                            slide =>
                                <div key={slide.id} className='slide'>
                                    <h1>{slide.head}</h1>
                                    <h2>{slide.main}</h2>
                                    <p>{slide.foot}</p>
                                </div>
                        )
                    }
                </Carousel>
            </div>

        </div>
    )
}

export default Hero
