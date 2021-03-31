import React, {useState, useEffect} from 'react';

// Custom Components
import Header from './components/Header.js';
import DataSortingWindow from './components/DataSortingWindow.js';

// Material ui
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

// Utility
import {generateRandomUniqueUnorderedList} from './helperFunctions.ts'; // still works!

const ALGORITHMS = [
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
    'Quick Sort',
    'Merge Sort',
    'Heap Sort'
]

const DATASIZES = ['5', '10', '25', '50', '100'];

const SPEEDS = ['0.25x', '0.5x', '1.0x', '1.5x', '2.0x'];

// Controls the program, grabs the algorithm and data size that are selected, runs/stops the algorithm, sends data points to child component, renders relevant data 
const App = () => {
    const styles = {
        overlay: { // need this AND <style> in index.html to make the div FULL screen!!
            backgroundColor: `${grey["900"]}`,
            position: 'fixed',
            width: '100%',
            height: '100%',
            display: 'grid',
            overflowY: 'scroll',
            overflowX: 'scroll'
        }, 
        layout: {
            display: 'grid',
            gridTemplateColumns: '5fr 2fr',
            gridGap: '60px',
            padding: '50px 30px 50px 30px',
        },
        sortWindowAndControls: {
            display: 'grid',
            gridTemplateRows: '10fr 1fr',
            width: '100%',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: `${grey["800"]}`,
            color: `${green["600"]}`,
            height: '500px',
        },
        descriptionWindow: {
            display: 'grid',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: `${grey["800"]}`,
            color: `${green["600"]}`,
            height: '500px',
        }
    }

    const [algorithm, setAlgorithm] = useState('');
    const [dataSize, setDataSize] = useState('10');
    const [data, setData] = useState(null);
    const [barWidth, setBarWidth] = useState('');

    useEffect(() => {
        setAlgorithm('');
        setDataSize('10');
        setData(generateRandomUniqueUnorderedList(10));
    }, []);

    useEffect(() => {
        setBarWidth(getBarWidth(dataSize));
    }, [dataSize])
    
    function handleAlgorithmSelection(index) {
        setAlgorithm(ALGORITHMS[index]);
    }

    function handleListSizeSelection(index) {
        setDataSize(DATASIZES[index]);
        setBarWidth(getBarWidth(DATASIZES[index]));
        setData(generateRandomUniqueUnorderedList(parseInt(DATASIZES[index])));
    }

    function shuffleDataRequest() {
        setData(generateRandomUniqueUnorderedList(parseInt(dataSize)));
    }

    // component lifecycle issue to update the width at the same time the data size is selected
    // getting div to be fixed, only fill the fixed div up to a percentage
    function getBarWidth() {
        console.log(dataSize);
        switch(parseInt(dataSize)) {
            case 5:
                return '18%';
            case 10:
                return '9%';
            case 25:
                return '1/30%';
            case 50: 
                return '0.01%';
            case 100:
                return '.01%';
            default: 
                return '5%';
        }
    }

    return (
        <div style={styles.overlay}>
            <Header 
                algorithm={algorithm} 
                listOfAlgorithms={ALGORITHMS} 
                algorithmSelected={handleAlgorithmSelection}
                dataSize={dataSize}
                listOfDataSizes={DATASIZES}
                dataSizeSelected={handleListSizeSelection}
                shuffleData={shuffleDataRequest}
            />
            <div style={styles.layout}>
                <div style={styles.sortWindowAndControls}>
                    <div>
                        <DataSortingWindow data={data} barWidth={barWidth}/>
                    </div>

                    <div>Controls</div>
                </div>
                
                <div style={styles.descriptionWindow}>Algorithm Information</div>
            </div>
        </div>
    )
}

export default App;