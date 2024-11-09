
import React from "react";
import { Container, Grid, Typography } from '@mui/material';
import { Place, Phone, Fax, Email } from '@mui/icons-material'
import contact_form from '../images/contact_banner.jpg';
import { useState } from "react";


export default function Contact() {
    // Set initial form state
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    // Handle form input changes
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data Submitted:', formData);
      // Add form submission logic (e.g., send data to API)

      if (!formData.name || !formData.email) {
        alert('Please fill in all fields');
        return;
      }
      
      console.log('Form Data Submitted:', formData);
      alert("Your Form Submitted");
    };


    return(
        <div>
            <Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_100 contact_form'>
<Container fixed>

<Grid container spacing={5}>
<Grid item xs={12} lg={6}>
<img src={contact_form} alt="Contact" />
    </Grid>
    <Grid item xs={12} lg={6}>

        <div className="contact_details_wrapper">
            <div className="conatct_box">
            <Place />
            <Typography gutterBottom variant="h5" component="div">
                Address
                </Typography>
                <Typography variant="body1" gutterBottom>
We make group workouts fun, daily food healthy & tasty, 
      </Typography>
            </div>
            <div className="conatct_box yellow_bg">
            <Phone />
            <Typography gutterBottom variant="h5" component="div">
                Phone
                </Typography>
                <Typography variant="body1" gutterBottom>
987 6543 210
      </Typography>
            </div>
            <div className="conatct_box yellow_bg">
            <Fax />
            <Typography gutterBottom variant="h5" component="div">
                Fax
                </Typography>
                <Typography variant="body1" gutterBottom>
123 4567 890
      </Typography>
            </div>
            <div className="conatct_box">
            <Email />
            <Typography gutterBottom variant="h5" component="div">
                Email
                </Typography>
                <Typography variant="body1" gutterBottom>
info@admingmail.com
      </Typography>
            </div>

        </div>






    <Typography gutterBottom variant="h4" component="div">
Get in touch
</Typography>
<form onSubmit={handleSubmit}>

        <div>
       
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      </div>
      <div>

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      </div>
      <div>
    
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      </div>
      <div>
      
        <textarea name="message" value={formData.message} onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </Grid>
    </Grid>
    </Container>
    </Container>
        </div>
    )
}