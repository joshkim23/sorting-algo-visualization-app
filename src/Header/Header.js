import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  horizontalStretch: {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto auto',

  }
}));

const Header  = ({algorithm, listOfAlgorithms, algorithmSelected, dataSize, listOfDataSizes, dataSizeSelected}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dataSizeAnchorEl, setDataSizeAnchorEl] = useState(null);

    // Control algorithm menu button drop down open&close
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // handles algorithm selection
    function handleAlgorithmSelection(index) {
        algorithmSelected(index);
        handleClose();
    }

    // Control Data size menu button drop down open&close
    const handleDataSizeClick = (event) => {
        setDataSizeAnchorEl(event.currentTarget);
    };
    const handleDataSizeClose = () => {
        setDataSizeAnchorEl(null);
    }

    // handles data size selection
    function handleDataSizeSelection(index) {
        dataSizeSelected(index);
        handleDataSizeClose();
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.horizontalStretch}>

                    <div>
                        <Button color="inherit" className={classes.title} >
                            Sorting Algorithm Visualizer
                        </Button>
                    </div>

                    {/* Algorithm Selector Control*/}
                    <div style={{alignContent: 'center'}}>
                        <Button 
                            style={{textTransform: 'none'}} 
                            color="inherit" 
                            aria-label="menu" 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleClick}
                        >
                            {algorithm ? algorithm : 'Algorithm'}
                            <ArrowDropDownIcon />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {listOfAlgorithms.map((name, index) => {
                                return (
                                    <MenuItem key={index} onClick={() =>handleAlgorithmSelection(index)}>{name}</MenuItem>
                                )
                            })}
                        </Menu>
                    </div>
                  
                    {/* Data Size Selector Control */}
                    <div style={{alignContent: 'center'}}>
                        <Button 
                            style={{textTransform: 'none'}} 
                            color="inherit" 
                            aria-label="menu" 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleDataSizeClick}
                        >
                            {dataSize} Elements
                            <ArrowDropDownIcon />
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={dataSizeAnchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            keepMounted
                            open={Boolean(dataSizeAnchorEl)}
                            onClose={handleDataSizeClose}
                        >
                            {listOfDataSizes.map((size, index) => {
                                return (
                                    <MenuItem key={index} onClick={() =>handleDataSizeSelection(index)}>{size}</MenuItem>
                                )
                            })}
                        </Menu>
                    </div>

                    <Button color="inherit" variant="outlined" style={{textTransform: 'none'}} >
                        Shuffle Data
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;