import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './HomeInformation.css'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
const HomeInformation = (props) => {
  const {img,id,name,description} = props.data;
  const classes = useStyles();
  const history = useHistory();
  const handleclick = (id) =>{
  const url = `/book/${id}`;
  history.push(url)
  
  }
    return (
        
        <Card className={classes.root } className="card-container">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardActions>
          {/* <Link to={`/book/${id}`}>Booking Now</Link> */}
          
          <Button onClick={ () => handleclick(id) } variant="warning"> Booking Now </Button>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
           
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
        
    );
};

export default HomeInformation;