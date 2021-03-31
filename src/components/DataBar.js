import React from 'react';
import green from '@material-ui/core/colors/green';
import Box from '@material-ui/core/Box';

// dynamically add a new css class to give bar diff color when it's either being compared, unsorted, or sorted
// green: sorted, white: unsorted, yellow: being sorted/compared
const DataBar = ({value, width, dataSize}) => {
    const styles = {
        container: {
            height: `${getHeight()}`,
            // height: `${dataSize>=25 ? `${(3*value)}px` : `${10 * value}px`}`,
            width: `${width}`,
            backgroundColor: `${green["600"]}`,
            paddingRight: '20px',
            transition: `height .05s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
            transform: `rotatex(180deg) translate3d(0, -400px,0)`,
            transformOrigin: `top`,
        }
    }
    function getHeight() {
        if(dataSize < 25) {
            return `${(20*value)}px`;
        } else if (dataSize === 25) {
            return `${(8*value)}px`;
        } else if (dataSize === 50 ) {
            return `${(3.5*value)}px`;
        } else {
            return `${(1.8*value)}px`;
        }
    }
    return (
        <Box style={styles.container}>
            
        </Box>
    )
}

export default DataBar;