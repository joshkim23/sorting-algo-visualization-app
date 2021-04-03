import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 250,
    },
    title: {
      fontSize: 16,
    },
    pos: {
    //   marginBottom: 12,
    },
  });

const AlgoDescriptionContainer = ({algoName, algoDescription, performance}) => {
    // const styles = {
    //     container: {
    //         display: 'grid',
    //         // gridGap: '3px',
    //         font: 'Roboto'
    //     }
    // }
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="h4" component="h2">
                {algoName? algoName : 'Select Algorithm'}
                <br />
            </Typography>
            <br/>
            <Typography variant="body2" component="p">
                {algoDescription? algoDescription : 'You must select an algorithm in order to visualize how it sorts the data'}
                <br />
            </Typography>
            <br />
            <Typography variant="h6" component="h4">
                Average Performance
                <br />
            </Typography>
            <Typography variant="body2" component="p">
                {performance}
            </Typography>
        </CardContent>

        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>

        </Card>
    )
}

export default AlgoDescriptionContainer;