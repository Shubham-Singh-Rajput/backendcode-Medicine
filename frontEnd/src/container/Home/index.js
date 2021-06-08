import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AllMedicines from './../../redux/action/AllMedicine/index';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const Home =()=>{
    const classes = useStyles();
    const MEDICINE=useSelector(({Allmedicine})=>Allmedicine)
    const dispatch=useDispatch()
    useEffect(()=>{
        // http://localhost:2000/shoapkeper/allmedicine?name=combiflame search parameter
        fetch(`http://localhost:2000/shoapkeper/allmedicine`).then(d=>d.json()).then(d=>{
            if(Object.keys(d.err).length===0)
            dispatch(AllMedicines.showMedicine(d.data))
        })
    },[dispatch])
    return (
        <>
        <div style={{display:'flex',margin:'2%' ,flexWrap:'wrap',justifyContent:'space-between'}}>
        {MEDICINE.map((item,i)=>{
            return (
        <Card className={classes.root} key={i} >
          <CardMedia
            className={classes.media}
            image={item?.photo}
            title={item?.name}
          />
          <CardContent>
          <Typography paragraph>
                NAME :{item?.name}
              </Typography>
    
            <Typography paragraph>
                PRICE OF ONE MEDICINE:{item?.price}
              </Typography>
              <Typography paragraph>
                  QUANTITY OF ONE MEDICINE:{item?.quantity}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              LAST UPDATED DATE:{item?.date}
            </Typography>
          </CardContent>
        </Card>
            )
        })}
        </div>
        </>
    )
}
export default Home

// onClick={()=>{history.push(`${PATH.UPDATEMEDICINE}/${item._id}`)}}user for