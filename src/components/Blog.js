import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import blog_img from '../images/Frame_39.png';
import blog_1 from '../images/blog_1.webp';
import blog_2 from '../images/blog_2.jpg';
import blog_3 from '../images/blog_3.jpg';
import blog_4 from '../images/blog_4.jpeg';


export default function Blog() {
  return (
 
    <Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_100 contact_form'>
    <Container fixed>
    
    <Grid container spacing={3}>
    <Grid item xs={12} lg={4}>
      <div className='blog_card'>
    <img src={blog_img} alt="Contact" />
    <div className='cat_name'>Design</div>
    <div className='post_title'> <Link to="/">Design and development</Link></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
    </div>
        </Grid>
        <Grid item xs={12} lg={4}>
      <div className='blog_card'>
    <img src={blog_1} alt="Contact" />
    <div className='cat_name'>Design</div>
    <div className='post_title'> <Link to="/">Design and development</Link></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
    </div>
        </Grid>
        <Grid item xs={12} lg={4}>
      <div className='blog_card'>
    <img src={blog_2} alt="Contact" />
    <div className='cat_name'>Design</div>
    <div className='post_title'> <Link to="/">Design and development</Link></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
    </div>
        </Grid>
        <Grid item xs={12} lg={4}>
      <div className='blog_card'>
    <img src={blog_3} alt="Contact" />
    <div className='cat_name'>Design</div>
    <div className='post_title'> <Link to="/">Design and development</Link></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
    </div>
        </Grid>
        <Grid item xs={12} lg={4}>
      <div className='blog_card'>
    <img src={blog_4} alt="Contact" />
    <div className='cat_name'>Design</div>
    <div className='post_title'> <Link to="/">Design and development</Link></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
    </div>
        </Grid>
        </Grid>
        </Container>
        </Container>

    
  )
}
