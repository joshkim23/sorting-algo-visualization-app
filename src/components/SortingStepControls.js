import React from 'react';
import ColorKeyItem from './ColorKeyItem.js';
import Button from '@material-ui/core/Button';
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import SkipNext from '@material-ui/icons/SkipNext';
import Stop from '@material-ui/icons/Stop';
import Brightness1 from '@material-ui/icons/Brightness1';
import { Typography } from '@material-ui/core';

const SortingStepControls = ({ handleNextButton, handlePrevButton, sortButton, colorKeys, trackerStep, trackerSize }) => {
    const styles = {
        speed: {
            
        },
        layout: {
            padding: '15px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '15px',
            alignItems: 'center',
            justifySelf: 'center'
        },
        buttons: {
            justifySelf: 'center',
            color: 'white'
        }
    }

    function getTrackerProgress() {
        return `${Math.floor((trackerStep/trackerSize)*100)}%`;
    }
    return (
        <div style={styles.layout}>

            <div style ={styles.buttons}>
                <Button style={{color: 'white'}}>
                    {trackerSize ? getTrackerProgress() : '0%'}
                </Button>

                <Button>
                    <SkipPrevious style={{color: 'white'}} onClick={() => handlePrevButton()}/>
                </Button>

                <Button style={{color: 'white'}} onClick = {() => sortButton()}>
                    SORT
                </Button>

                <Button onClick={() => handleNextButton()}>
                    <SkipNext style={{color: 'white'}}  />
                </Button>

                <Button style={{color: 'white'}}>
                    1.0x
                </Button>
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