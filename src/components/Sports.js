import {React} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import rimg24 from '../images/rimg24.png';
import rimg25 from '../images/rimg25.png';
import rimg26 from '../images/rimg26.png';
import rimg27 from '../images/rimg27.png';
import rimg28 from '../images/rimg28.png';
import rimg29 from '../images/rimg29.png';
import rimg30 from '../images/rimg30.png';
import rimg31 from '../images/rimg31.png';

export default function Sports() {
   

    return (
        <div>
<Container disableGutters maxWidth={false} className='dark_gray_bg pb_50 pt_100 card_wrapper fun_trainer'>
<Container fixed className='max_width_1100'>
<Grid container spacing={1}>
<Grid item xs={6} lg={3}>
<img src={rimg24} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg25} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg26} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg27} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg28} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg29} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg30} alt="" />
</Grid>
<Grid item xs={6} lg={3}>
<img src={rimg31} alt="" />
</Grid>
</Grid>
<Grid container spacing={5} className='max_width_700'>
<Grid item xs={12}>

    <Typography gutterBottom variant="h2" component="div">
          Fun, trainer led group classes
          </Typography>
</Grid>
</Grid>
</Container>
</Container>


        </div>
    );
}
