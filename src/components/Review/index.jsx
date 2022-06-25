import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

import ReviewItem from './ReviewItem';

const dataReviews = [
    {
        img: './assets/img/review1.png',
        name: 'Vino Costa',
        text: 'Great service and great mobile application third-party hacks of the cold-storage environment. Dope!',
        rate: '5'
    },
    {
        img: './assets/img/review2.png',
        name: 'Alexander Nowak',
        text: 'first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures',
        rate: '5'
    },
    {
        img: './assets/img/review3.png',
        name: 'Kevin Stuart',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration',
        rate: '5'
    },
    {
        img: './assets/img/review4.png',
        name: 'Evgenii Zayka',
        text: 'Great service and great mobile application third-party hacks of the cold-storage environment. Dope!',
        rate: '5'
    },
    {
        img: './assets/img/review2.png',
        name: 'Alexander Nowak',
        text: 'first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures',
        rate: '5'
    },
]

const Review = () => {
    return(
        <section className='review' id='reviews'>
            <img src='./assets/img/review-bg.svg' alt='bg' className='review__bg light pen' />
            <img src='./assets/img/review-bg-dark.svg' alt='bg' className='review__bg dark pen' />

            <div className='container'>
                <div className='review__inner w100 df fdc aifs'>
                    <div className='w100 df aic jcsb'>
                        <h2 className='headline1'>
                            Reviews
                        </h2>
                    </div>

                    <OwlCarousel className='review__content w100' loop margin={24} items={4} nav stagePadding={12}
                    navText={["<div class='review__arrow review__arrow--inner df aic jcc'><img src='./assets/img/arrow-left.svg' alt='arrow' class='img__auto light' /><img src='./assets/img/arrow-left-dark.svg' alt='arrow' class='img__auto dark' /></div>", "<div class='review__arrow review__arrow--next df aic'>Next<img src='./assets/img/arrow-right.svg' alt='arrow' class='arrow__next img__auto light' /><img src='./assets/img/arrow-right-dark.svg' alt='arrow' class='arrow__next img__auto dark' /></div>"]}>
                        {dataReviews.map((d, id) => <ReviewItem key={id} img={d.img} name={d.name} text={d.text} rate={d.rate} />)}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Review;