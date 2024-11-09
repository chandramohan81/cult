import React from 'react'
import right_arrow from '../images/image_41.png';
import { Container, Grid, Typography, Link  } from '@mui/material';
export default function Fitness() {
  return (
    <div> 

   
     
 <Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_100 cult_transform'>
<Container fixed>

<Grid container spacing={5}>
<Grid item xs={12} lg={6}>
<div className="cultpass_transform cult_transform_bg1">
<ul>
  <li>
<Typography gutterBottom variant="h4" component="div">
cult transform
          </Typography>
          <Typography variant="body1" gutterBottom>
          Get coached to lose weight for good
      </Typography>
          </li>
          <li>
          <Link to="#"><img src={right_arrow} alt="" /></Link>
           </li>
          </ul>
         </div>
</Grid>
<Grid item xs={12} lg={6}>
<div className="cultpass_transform cult_transform_bg2">
<ul>
  <li>
<Typography gutterBottom variant="h4" component="div">
The .fit way
          </Typography>
          <Typography variant="body1" gutterBottom>
          Making health easy, one day at a time
      </Typography>
          </li>
          <li>
          <Link to="#"><img src={right_arrow} alt="" /></Link>
           </li>
          </ul>
         </div>
</Grid>
<Grid item xs={12} lg={6}>
<div className="cultpass_transform cult_transform_bg3">
<ul>
  <li>
<Typography gutterBottom variant="h4" component="div">
Workout Gear
          </Typography>
          <Typography variant="body1" gutterBottom>
          Everything you need for your workout
      </Typography>
          </li>
          <li>
          <Link to="#"><img src={right_arrow} alt="" /></Link>
           </li>
          </ul>
         </div>
</Grid>
<Grid item xs={12} lg={6}>
<div className="cultpass_transform cult_transform_bg4">
<ul>
  <li>
<Typography gutterBottom variant="h4" component="div">
Sugar.fit
          </Typography>
          <Typography variant="body1" gutterBottom>
          Reverse Type 2 Diabetes and Prediabetes
      </Typography>
          </li>
          <li>
          <Link to="#"><img src={right_arrow} alt="" /></Link>
           </li>
          </ul>
         </div>
</Grid>

</Grid>
</Container>
</Container>



    </div>
    
    
  );
}
