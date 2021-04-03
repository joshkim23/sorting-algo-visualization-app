import React from 'react';
import './DataBar.css';
import green from '@material-ui/core/colors/green';
import Box from '@material-ui/core/Box';

// dynamically add a new css class to give bar diff color when it's either being compared, unsorted, or sorted
// green: sorted, white: unsorted, yellow: being sorted/compared
const DataBar = ({value, width, dataSize}) => {
    const styles = {
        container: {
            backgroundColor: `${green["600"]}`,
            height: `${getHeight()}`,
            width: `${width}`
        }
    }
    function getHeight() {
        if (dataSize < 10) {
            return `${(30*value)}px`;
        } else if(dataSize < 25) {
            return `${(20*value)}px`;
        } else if (dataSize === 25) {
            return `${(8*value)}px`;
        } else if (dataSize === 50 ) {
            return `${(3.9*value)}px`;
        } else {
            return `${(2*value)}px`;
        }
    }
    return (
        <Box className="data-bar" style={styles.container}>
            
        </Box>
    )
}

export default DataBar;