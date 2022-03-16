import * as React from 'react';
import Button from '@mui/material/Button';
import { Wrapper } from './index';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '@mui/material/Avatar';
// Import Swiper styles
import 'swiper/css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const slides = [
  {
    'title': 'Authentic self confidence',
    'subtitle': 'Do you with you can be more self-confident just like other confident people you like?',
    'imgHeading': 'inspiring stories',
    'imgUrl': 'https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg',
    'imgTitle': 'No one has all of the time',
    'imgDescription': 'kelly Bayer Rosmarin, Optus CEO',
    'ctaText': 'intention',
    'listTitle': '7-day focus',
    'listPoints': [
      {
        'icon': '',
        'text': 'Easy 5-minute daily tasks'
      },
      {
        'icon': '',
        'text': 'Daily Motivation'
      },
      {
        'icon': '',
        'text': 'Calender reminders'
      },
      {
        'icon': '',
        'text': 'pair up with a buddy'
      },
      {
        'icon': '',
        'text': 'celebrate small wins'
      }
    ]
  },
  {
    'title': 'Adapting to change',
    'subtitle': 'Do you with you can be more self-confident just like other confident people you like?',
    'imgHeading': 'inspiring stories',
    'imgUrl': 'https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg',
    'imgTitle': 'No one has all of the time',
    'imgDescription': 'kelly Bayer Rosmarin, Optus CEO',
    'ctaText': 'intention2',
    'listTitle': '7-day focus',
    'listPoints': [
      {
        'icon': '',
        'text': 'Easy 5-minute daily tasks'
      },
      {
        'icon': '',
        'text': 'Daily Motivation'
      },
      {
        'icon': '',
        'text': 'Calender reminders'
      },
      {
        'icon': '',
        'text': 'pair up with a buddy'
      },
      {
        'icon': '',
        'text': 'celebrate small wins'
      }
    ]
  }
]
export default function Landing() {

  return (
    <Wrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <h2>{slide.imgHeading}</h2>

              <div className='main'>
                <Avatar className='left' alt="Remy Sharp" src={slide.imgUrl}
                  sx={{ width: 100, height: 100 }}
                />
                <div className='right'>
                  <h5>{slide.imgTitle}</h5>
                  <p>{slide.imgDescription}</p>
                </div>
              </div>

              <h2>{slide.listTitle}</h2>
              {slide.listPoints.map((listPoint) => (<div className='listpoints'>
                <DensityMediumIcon style={{verticalAlign:'middle', marginRight: '10px'}}/>
                <span>{listPoint.text}</span>
                </div>
              ))}
              <Button style={{marginTop: '10px', width: '100%'}} color='primary' href='#demo' variant='contained'>{slide.ctaText}</Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
