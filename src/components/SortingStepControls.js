import React from 'react';
import Button from '@material-ui/core/Button';
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import SkipNext from '@material-ui/icons/SkipNext';
import Stop from '@material-ui/icons/Stop'

const SortingStepControls = ({ handleNextButton, handlePrevButton, sortButton }) => {
    const styles = {
        layout: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            // gridGap: '5px',
        }
    }
    return (
        <div style={styles.layout}>
            <Button style={{color: 'red'}}>
                <Stop />
            </Button>

            <div>
                <Button>
                    <SkipPrevious style={{color: 'white'}} onClick={() => handlePrevButton()}/>
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