import React from 'react';
import Button from '@material-ui/core/Button';
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import SkipNext from '@material-ui/icons/SkipNext';
import Stop from '@material-ui/icons/Stop'

const SortingStepControls = ({ handleNextButton, sortButton }) => {
    const styles = {
        layout: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            // gridGap: '5px',
        }
    }
    return (
        <div style={styles.layout}>
            <Button style={{color: 'red'}} fontSizeLarge>
                <Stop />
            </Button>

            <div>
                <Button >
                    <SkipPrevious fontSize={'48px'} style={{color: 'white'}} />
                </Button>

                <Button style={{color: 'white'}} onClick = {() => sortButton()}>
                    SORT
                </Button>

                <Button onClick={() => handleNextButton()}>
                    <SkipNext style={{color: 'white'}}  />
                </Button>
            </div>

            <div>
                key
            </div>
            
        </div>
    )
}

export default SortingStepControls;