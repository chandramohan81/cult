import React from 'react'
import { Link } from 'react-router-dom';
import { YouTube, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import logo from '../images/logo_n.png';
import image_46 from '../images/image_46.png';
import image_47 from '../images/image_47.png';
import { Container, Grid, Typography } from '@mui/material';

function Footer() {
  return (
<>

<Container disableGutters maxWidth={false} className='black_bg pd_all_50 footer_first'>
<Grid container spacing={3}>
<Grid item xs={12} lg={3} className=''>
<div className='logo'>
<img src={logo} alt="Logo 2" className='slider_logo' />
</div>
<Typography variant="body1" className='text-white max_width_400' gutterBottom>
At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay
      </Typography>
</Grid>
<Grid item xs={12} lg={2} className=''>
  <ul>
  <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fitness">Fitness </Link>
          </li>  
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
         
 </ul>
</Grid>
<Grid item xs={12} lg={2} className=''>
<ul>
    <li><Link to="#">partner.fit</Link></li>
    <li><Link to="#">blogs</Link></li>
    <li><Link to="#">security</Link></li>
    <li><Link to="#">careers</Link></li>
 </ul>
</Grid>
<Grid item xs={12} lg={2} className=''>
<ul>
    <li><Link to="#">contact us</Link></li>
    <li><Link to="#">privacy policy</Link></li>
    <li><Link to="#">cult bmi calculator</Link></li>
    <li><Link to="#">terms & conditions</Link></li>
 </ul>
</Grid>
<Grid item xs={12} lg={3} className='footer_img'>
<Link to="#"><img src={image_46} alt="" /></Link>
<Link to="#"><img src={image_47} alt="" className='mt_20' /></Link>

<ul className='social_icon'>
  <li><Link to="#"><YouTube /></Link></li>
  <li><Link to="#"><Facebook /></Link></li>
  <li><Link to="#"><Twitter /></Link></li>
  <li><Link to="#"><Instagram /></Link></li>
  <li><Link to="#"><LinkedIn /></Link></li>
</ul>
       
</Grid> 
</Grid>
</Container>




<Container disableGutters maxWidth={false} className='light_gray_bg pd_all_50 footer_second'>


<Grid container spacing={3}>
<Grid item xs={12} lg={3} className=''>
  <ul>
    <li><Link to="#">cult.fit for business</Link></li>
    <li><Link to="#">cult.fit franchise</Link></li>
    <li><Link to="#">corporate partnerships</Link></li>
    <li><Link to="#">cult pass network</Link></li>
    <li><Link to="#">t&c for business</Link></li>
 </ul>
</Grid>
<Grid item xs={12} lg={3} className=''>
  <ul>
    <li><Link to="#">cult.fit for business</Link></li>
    <li><Link to="#">cult.fit franchise</Link></li>
    <li><Link to="#">corporate partnerships</Link></li>
    <li><Link to="#">cult pass network</Link></li>
    <li><Link to="#">t&c for business</Link></li>
 </ul>
</Grid>
<Grid item xs={12} lg={3} className=''>
  <ul>
    <li><Link to="#">cult.fit for business</Link></li>
    <li><Link to="#">cult.fit franchise</Link></li>
    <li><Link to="#">corporate partnerships</Link></li>
    <li><Link to="#">cult pass network</Link></li>
    <li><Link to="#">t&c for business</Link></li>
 </ul>
</Grid>
<Grid item xs={12} lg={3} className=''>
  <ul>
    <li><Link to="#">cult.fit for business</Link></li>
    <li><Link to="#">cult.fit franchise</Link></li>
    <li><Link to="#">corporate partnerships</Link></li>
    <li><Link to="#">cult pass network</Link></li>
    <li><Link to="#">t&c for business</Link></li>
 </ul>
</Grid>


</Grid>
</Container>


</>
  )
}

export default Footer;