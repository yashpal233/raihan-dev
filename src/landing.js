import * as React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '@mui/material/Avatar';
import { Wrapper } from './index';
import ReactPlayer from 'react-player'


// Import Swiper styles
import 'swiper/css';
import { Button } from '@mui/material';

const links = [
  {
    text: 'Meaningful relationships',
    url: '#intention'
  },
  {
    text: 'Fulfilling career',
    url: 'some page'
  },
  {
    text: 'Regular excercise',
    url: 'some page'
  }
]
export default function Landing() {

  return (
    <Wrapper>
      <h1 className='heading'>
        My Intentions
        <Button style={{float: 'right', color: '#fdcc08'}} href='#demo'><AddBoxIcon className='icon'/></Button>
      </h1>

      <div className='subHeading'>Choose from 30+ carefully crafter intentions or create your own</div>

      <h2>Mental Wellbeing</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.75}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ReactPlayer height='200' width='200' url='https://www.youtube.com/watch?v=sMTKlkmhhgE'/>
          <p>Authentic self-confidence</p>
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer height='200' width='200' url='https://www.youtube.com/watch?v=cSfjfb4d4lM'/>
          <p>Adapting to change</p>
        </SwiperSlide>
      </Swiper>

      {links.map((link, index) => (
        <a onClick={() => {setHash(location.hash)}} className='bottomlinks' href={link.url}>{link.text}</a>
      ))}
    </Wrapper>
  );
}
