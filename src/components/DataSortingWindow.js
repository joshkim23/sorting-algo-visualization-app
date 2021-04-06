import React, {useState} from 'react';
import DataBar from './DataBar/DataBar.js';
import green from '@material-ui/core/colors/green';

// In order to display the array as a list of bars of varying heights we need to make the css dynamic
// The width of the window is constant so we need to set the widths of each bar depending on data size
// Need a formula for constructing individual bars depending on data size, and value. Value to height conversion will be constant ? but width to data size will not 
// Since it's dynamic, when swapping data points it needs to support each algorithm by highlighting the data points being compared and then recalculating the height of the bars in place as the swap happens at the parent level
// Will have a fixed set of bar components, the size will just vary ... will need a way other than .map? If you .map every swap that kinda defeats the purpose even if the algorithm itself isn't doing that..... 
// You can pass the indexes in of what's being compared/what ends up being swapped, so you could access each data point at O(1), but how do you do that with .map?
// You could just bite the bullet and use .map, and send an updated array everytime so this component will be recalculating the bars constantly as the algorithm runs. With large data it could be sus
// How to pass information to the window that elements have been sorted vs. are being comapred vs. are unsorted?
const DataSortingWindow = ({data, comparing, sorted, swapped, barWidth}) => {
    const styles = {
        graph: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            gridGap: '1%'
        }
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));

    // checking the comparing, sorted, and swapped arrays from the dataSortingList - if the index value is present in any of these, return the corresponding color key
    function getBarColor(index) {
        if (comparing && comparing.includes(index)) {
            return 'yellow';
        } else if (swapped && swapped.includes(index)) {
            return 'red';
        } else if (sorted && sorted.includes(index)) {
            return `${green["600"]}`;
        } else  {
            return null;
        }
    }
    
    return (
        <div style={styles.graph}>
            {data? data.map((value, index) => {
                const colorKey = getBarColor(index);
                return (
                    <DataBar key={index} value={value} width={barWidth} color={colorKey} dataSize={data.length} windowSize={windowSize}/>
                )
            }) : null}
        </div>
    )
}

export default DataSortingWindow;