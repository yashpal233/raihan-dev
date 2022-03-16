import * as React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { styled } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '@mui/material/Avatar';


// Import Swiper styles
import 'swiper/css';
import { LinkSharp, NoEncryption } from '@mui/icons-material';


const LandingWrapper = styled('div')({
  padding: 10,
  maxWidth: '375px',
  '.icon': {
    'padding-top': '5px',
    float: 'right',
  },
  '.heading': {
    marginBottom : '48px'
  },
  '.subHeading': {
    marginBottom : '48px'
  },
  '.bottomlinks': {
    fontSize: '24px',
    padding: '5px',
    borderBottom: '1px solid black',
    display: 'block',
    color: 'black',
    textDecoration: 'none'
  }
});

const links = [
  {
    text: 'Meaningful relationships',
    url: '#demo'
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
  const [hash, setHash] = React.useState(location.hash);

  React.useEffect(() => {
    hash === '#demo' && location.reload();
  }, [hash])

  return (
    <LandingWrapper>
      <h1 className='heading'>My Intentions <AddBoxIcon className='icon'/> </h1>

      <div className='subHeading'>Choose from 30+ carefully crafter intentions or create your own</div>

      <h2>Mental Wellbeing</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg"
            sx={{ width: 200, height: 200 }}
          />
          <p>Authentic self-confidence</p>
        </SwiperSlide>
        <SwiperSlide>
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/37Sw52k/istockphoto-1007763808-612x612.jpg"
            sx={{ width: 200, height: 200 }}
          />
          <p>Adapting to change</p>
        </SwiperSlide>
      </Swiper>

      {links.map((link, index) => (
        <a onClick={() => {setHash(location.hash)}} className='bottomlinks' href={link.url}>{link.text}</a>
      ))}
    </LandingWrapper>
  );
}
