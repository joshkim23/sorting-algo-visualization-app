import React from 'react';
import './DataBar.css';
import Box from '@material-ui/core/Box';
import lightBlue from '@material-ui/core/colors/lightBlue';

const DataBar = ({value, width, dataSize, color}) => {
    const styles = {
        container: {
            backgroundColor: `${color? color : lightBlue["600"]}`,
            height: `${getHeight()}`,
            width: `${width}`,
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
        <Box className="data-bar" style={styles.container} />
    )
}

export default DataBar;