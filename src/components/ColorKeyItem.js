import React from 'react';
import Brightness1 from '@material-ui/icons/Brightness1';
import Typography from '@material-ui/core/Typography';

const ColorKeyItem = ({color, colorKey}) => {
    const styles = {
        orb: {
            color: `${color}`
        },
        layout: {
            display: 'inline-grid',
            gridTemplateColumns: 'auto auto',
            gridGap: '5px',
            padding: '8px',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'Roboto'
        }
    }
    return (
        <div style={styles.layout}>
            <Brightness1 style={styles.orb} />
            <Typography>
                {colorKey}
            </Typography>
        </div>
    )
}

export default ColorKeyItem;