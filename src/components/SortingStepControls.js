import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography'
import ColorKeyItem from './ColorKeyItem.js';
import Button from '@material-ui/core/Button';
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import SkipNext from '@material-ui/icons/SkipNext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import green from '@material-ui/core/colors/green';

const SortingStepControls = ({ handleNextButton, handlePrevButton, sortButton, colorKeys, trackerStep, trackerSize, speed, listOfSpeeds, handleSpeedSelected }) => {
    const styles = {
        speed: {
            
        },
        layout: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '15px',
            alignItems: 'center',
            justifySelf: 'center',
        },
        buttons: {
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            color: 'white'
        }
    }

    const [anchorEl, setAnchorEl] = useState(null);

    // Control speed menu button drop down open&close
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
    setAnchorEl(null);
    };

    function handleSpeedSelection(index) {
        handleClose();
        handleSpeedSelected(index);
    }


    function getTrackerProgress() {
        return `${Math.floor((trackerStep/trackerSize)*100)}%`;
    }
    return (
        <div style={styles.layout}>

            <div style ={styles.buttons}>
                <Typography style={{color: 'white', alignSelf: 'center'}}>
                    {trackerSize ? getTrackerProgress() : '0%'}
                </Typography>

                <Button>
                    <SkipPrevious style={{color: 'white'}} onClick={() => handlePrevButton()}/>
                </Button>

                <Button color="inherit" variant="outlined" style={{color: 'white'}} onClick = {() => sortButton()}>
                    SORT
                </Button>

                <Button onClick={() => handleNextButton()}>
                    <SkipNext style={{color: 'white'}}  />
                </Button>

                {/* Speed drop down selector */}
                <div style={{alignContent: 'center'}}>
                        <Button 
                            style={{textTransform: 'none'}} 
                            color="inherit" 
                            aria-label="menu" 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleClick}
                        >
                            {speed}x
                            <ArrowDropDownIcon />
                        </Button>
                        <Menu
                            id="simple-menu"
                            style={{margin: '0', padding:'0'}}
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {listOfSpeeds.map((speed, index) => {
                                return (
                                    <MenuItem 
                                        onMouseEnter={(e) => e.target.style.backgroundColor = `${green["600"]}`}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
                                        key={index} 
                                        onClick={() =>handleSpeedSelection(index)}
                                    >
                                        {speed}x
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </div>
            </div>

            <div>
                {colorKeys.map((key, index) => {
                    return (
                        <ColorKeyItem key={index} colorKey={key.key} color={key.color} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default SortingStepControls;