import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
    border:'1px solid black',
    padding:'5px',
    margin: '30px',
    backgroundColor:'#ffffff',
    color:'1e1e1e',
    boxShadow:' 5px 10px  5px gray'
    
    },
    
    
    title: {
      fontSize: '30px',
      color:'black'
    },
    pos: {
      marginBottom:'12px',
      padding :'12px',
      color: 'black',
    },
  });
  
const Post = (props) => {
    const {id,title} =props.post;

    const history = useHistory();
    const handleClick =(postId) =>{
        const url = `/post/${postId}`;
        history.push(url);

    }
    
    const classes = useStyles();

    return (

        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          ID NO :{id}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
             Post Title: {title}
          </Typography>
          
        </CardContent>
        <CardActions>
          
       
        <Button variant="contained" color="primary" onClick={() =>handleClick(id)}>
        Detail More
        </Button>
        </CardActions>
      </Card>

    );
};

export default Post;