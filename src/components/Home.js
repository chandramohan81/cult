import React from 'react';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import slide_logo from '../images/logo_2.png';
import elite from '../images/elite.png';
import elite_2 from '../images/elite2.png';
import elite_3 from '../images/elite3.png';
import image_1 from '../images/image_1.png';
import image_2 from '../images/image_2.png';
import rimg21 from '../images/rimg21.png';
import rimg22 from '../images/rimg22.png';
import rimg23 from '../images/rimg23.png';

import cutpass_logo from '../images/cutpass_logo.png';
import frame_25 from '../images/Frame_25.png';
import frame_26 from '../images/frame26.png';
import frame_27 from '../images/frame27.png';
import frame_28 from '../images/frame28.png';

import image_42 from '../images/image_42.png';
import image_43 from '../images/image_43.png';
import image_44 from '../images/image_44.png';
import image_45 from '../images/image_45.png';
import image_46 from '../images/image_46.png';
import image_47 from '../images/image_47.png';
import { Container, Grid, Typography, Button, Card, CardActionArea, CardContent, Link  } from '@mui/material';
import Fitness from './Fitness';
import Sports from './Sports';


const Home = () => {
  return (
    <>
    <Container disableGutters maxWidth={false} className='slider_area'>
      <Container maxWidth={false} className='banner_top_content'>
      <Grid className='text-center'>
   
<img src={slide_logo} alt="Logo 2" className='slider_logo' />
<Typography variant="body1" className='text-white' gutterBottom>
A fitness movement that is worth <br/>breaking a sweat for
      </Typography>
      <Button variant="outlined">EXPLORE CULTPASS</Button>
     <div className='down_arrow'><Link to="#"><KeyboardArrowDown /></Link></div>    
</Grid>
      </Container>
      <Container maxWidth={false} className='banner_cercle'>
        </Container>
    </Container>


    <Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_50 card_wrapper'>
 <Container fixed className='max_width_1100'>
<Grid container spacing={3}>
  <Grid item xs={12} lg={4}>
  <Card className='home_card'>
      <CardActionArea>   
        <CardContent className='text-center'>
          <Typography gutterBottom variant="h5" component="div">
            cultpass
          </Typography>
          <img src={elite} alt='hello' />
          <Typography variant="body2" color="text.secondary">
          Unlimited access to group classes, all gyms and at-home workouts
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} lg={4}>
  <Card className='home_card'>
      <CardActionArea>
      
        <CardContent className='text-center'>
          <Typography gutterBottom variant="h5" component="div">
            cultpass
          </Typography>
          <img src={elite_2} alt='hello' />
          <Typography variant="body2" color="text.secondary">
          Unlimited access to all PRO gyms and at-home workouts
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} lg={4}>
  <Card className='home_card'>
      <CardActionArea>
      
        <CardContent className='text-center'>
          <Typography gutterBottom variant="h5" component="div">
            cultpass
          </Typography>
          <img src={elite_3} alt='hello' />
          <Typography variant="body2" color="text.secondary">
          Unlimited access to single center and at-home workouts
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</Grid>
</Container>
</Container>


<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_50 one_member_wrapper posi_relative'>
<Container fixed className='one_member'>
<Grid container spacing={5}>
<Grid item xs={12} lg={6}>
  <img src={image_1} alt="" />
  </Grid>
  <Grid item xs={12} lg={6}>
<img src={image_2} alt="" className='space_top_50' />
</Grid>
</Grid>
<Grid container spacing={5} className='max_width_700'>
<Grid item xs={12}>
<Typography gutterBottom variant="h5" component="div">
            cultpass
          </Typography>
          <Typography gutterBottom variant="h2" component="div">
          One membership for all your fitness needs
          </Typography>
</Grid>
</Grid>
</Container>
</Container>



<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_50 one_member_wrapper'>
<Grid container spacing={5}>
<Grid item xs={6} lg={4}>
  <img src={rimg21} alt="" />
  </Grid>
  <Grid item xs={6} lg={4}>
<img src={rimg22} alt="" className='space_top_50' />
</Grid>
<Grid item xs={12} lg={4}>
  <img src={rimg23} alt="" />
  </Grid>
</Grid>
</Container>


<Sports />



<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 cultpass_sec'>
<Container fixed>
<Grid container spacing={3}>
<Grid item xs={12} className='text-center'>
      <img src={cutpass_logo} alt="" className='max_width_250' />
          <Typography gutterBottom variant="h5" component="div" className='learn_more'>
          LEARN MORE
          </Typography>
</Grid>
</Grid>

<Grid container spacing={3}>
<Grid item xs={12} lg={3} className='mobile_border'>
<div className="cultpass_card cutpas_bg_1">
<img src={frame_25} alt="" />
</div>
<Typography gutterBottom variant="h4" component="div">
Unlimited access to
          </Typography>
          <ul className='card_list'>
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </ul>
      <div className='card_footer'>
          <Link to="#"><Button variant="contained" className='gray_btn'>TRY FOR FREE</Button></Link>
          <Link to="#"><Button variant="outlined" className='white_btn'>LEARN MORE</Button></Link>
          </div>
</Grid>

<Grid item xs={12} lg={3} className='mobile_border'>
<div className="cultpass_card cutpas_bg_2">
<img src={frame_26} alt="" />
</div>
<Typography gutterBottom variant="h4" component="div">
Unlimited access to
          </Typography>
          <ul className='card_list'>
            <li>All PRO gyms</li>
            <li>2 Sessions/month at ELITE gyms & group classes</li>
            <li>At-home live workouts</li>
          </ul>
      <div className='card_footer'>
          <Link to="#"><Button variant="contained" className='gray_btn'>TRY FOR FREE</Button></Link>
          <Link to="#"><Button variant="outlined" className='white_btn'>LEARN MORE</Button></Link>
          </div>
</Grid>
<Grid item xs={12} lg={3} className='mobile_border'>
<div className="cultpass_card cutpas_bg_3">
<img src={frame_27} alt="" />
</div>
<Typography gutterBottom variant="h4" component="div">
Unlimited access to
          </Typography>
          <ul className='card_list'>
            <li>Badminton, swimming & other sports</li>
            <li>Guaranteed playing partner</li>
            <li>One center that you choose</li>
          </ul>
      <div className='card_footer'>
          <Link to="#"><Button variant="contained" className='gray_btn'>TRY FOR FREE</Button></Link>
          <Link to="#"><Button variant="outlined" className='white_btn'>LEARN MORE</Button></Link>
          </div>
</Grid>
<Grid item xs={12} lg={3} className='mobile_border'>
<div className="cultpass_card cutpas_bg_4">
<img src={frame_28} alt="" />
</div>
<Typography gutterBottom variant="h4" component="div">
Unlimited access to
          </Typography>
          <ul className='card_list'>
            <li>One center that you choose</li>
            <li>Limited sessions* in other centers & gyms in your city</li>
            <li>At-home live workouts</li>
          </ul>
      <div className='card_footer'>
          <Link to="#"><Button variant="contained" className='gray_btn'>TRY FOR FREE</Button></Link>
          <Link to="#"><Button variant="outlined" className='white_btn'>LEARN MORE</Button></Link>
          </div>
</Grid>

</Grid>

</Container>
</Container>


<Fitness />




<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_50 wellness_hub'>
<Container fixed>

<Grid container spacing={1} className='wellness_bg_img' direction="row" justifyContent="flex-end" alignItems="center">
<Grid item xs={12} lg={4} className='mobile_center'>
<Typography gutterBottom variant="h4" component="div">
Wellness Hub
          </Typography>
          <Typography variant="body1" className='text-white max_width_200' gutterBottom>
          One place for all your well-being needs
      </Typography>
      <Typography variant="body1" className='text-black' gutterBottom>
      WORKOUT GEAR
      </Typography>
      <Typography variant="body1" className='text-black' gutterBottom>
      LABS
      </Typography>
      <Link to="#"><Button variant="outlined" className='white_btn'>MINDFULNESS <KeyboardArrowRight /></Button></Link>
</Grid>

<Grid item xs={6} lg={4}>
  <img src={image_42} alt='' className='mb_8' />
  <img src={image_44} alt='' />
</Grid>
<Grid item xs={6} lg={4}>
  <img src={image_43} alt='' className='mb_8' />
  <img src={image_45} alt='' />
</Grid>

</Grid>
</Container>
</Container>


<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_50 download_sec'>
<Container fixed>

<Grid container spacing={1} className='download_bg_img'>
<Grid item xs={12} lg={5}>
<Typography gutterBottom variant="h4" component="div">
Download the most loved fitness app
          </Typography>
          <Typography variant="body1" className='text-white max_width_200' gutterBottom>
          Start your fitness journey with us. Join the cult!
      </Typography>
     <ul>
     <li><Link to="#"><img src={image_46} alt="" /></Link></li>
     <li><Link to="#"><img src={image_47} alt="" /></Link></li>
      </ul>
</Grid>
</Grid>
</Container>
</Container>




<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 join_family'>
<Container fixed className='max_width_1100'>
<Grid container spacing={3}>
<Grid item xs={12} className='text-center'>
<Typography gutterBottom variant="h2" component="div" className=''>
Join the cult family
          </Typography>
         
</Grid>
</Grid>

<Grid container spacing={3}>
<Grid item xs={12} lg={6}>
<div className="join_bg_1">
<Typography gutterBottom variant="h3" component="div">
Careers at Cult
          </Typography>
          <Typography gutterBottom variant="h4" component="div" className='learn_more'>
          LEARN MORE
          </Typography>
</div>    
</Grid>

<Grid item xs={12} lg={6}>
<div className="join_bg_2">
<Typography gutterBottom variant="h3" component="div" className='text_gradiant'>
cult.fit franchise opportunities
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Partner with the largest fitness brand in India
          </Typography>
          <Typography gutterBottom variant="h4" component="div" className='learn_more'>
          LEARN MORE
          </Typography>
</div>       
</Grid>

</Grid>
</Container>
</Container>



<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 we_are_cult_sec'>
<Grid container spacing={3}>
<Grid item xs={12} className='right_content'>
<div className="">

          <Typography gutterBottom variant="h4" component="div" className='text-white'>
          At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga
           & meditation, and medical & lifestyle care hassle-free.
#BeBetterEveryDay
          </Typography>
</div>    
</Grid>
</Grid>
</Container>




</>
  );
};

export default Home;
