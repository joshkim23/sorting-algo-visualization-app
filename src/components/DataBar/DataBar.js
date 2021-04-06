import React from 'react';
// import './DataBar.css';
import Box from '@material-ui/core/Box';
import lightBlue from '@material-ui/core/colors/lightBlue';

const DataBar = ({value, width, dataSize, color, windowSize}) => {
    const styles = {
        dataBar: {
            backgroundColor: `${color? color : lightBlue["600"]}`,
            height: `${getHeight()}`,
            width: `${width}`,
            display: 'flex',
            flexDirection: 'column reverse',
            alignItems: 'flex-end',
            transition: '125ms ease-in-out',
            transform: `${windowSize > 750 ? 'rotatex(180deg) translate3d(0, -400px, 0)' : 'rotatex(180deg) translate3d(0, -325px, 0)'} `,
            transformOrigin: 'top'
        }
    }

    function getHeight() {
        if (dataSize < 10) {
            return `${((10*value)/100)*100}%`;
        } else if(dataSize < 25) {
            return `${((10*value)/250)*100}%`;
        } else if (dataSize === 25) {
            return`${((4.6*value)/250)*100}%`;
        } else if (dataSize === 50 ) {
            return `${((4.6*value)/500)*100}%`;
        } else {
            return `${((2.3*value)/500)*100}%`;
        }
    }
    return (
        <Box className="data-bar" style={styles.dataBar} />
    )
}

export default DataBar;