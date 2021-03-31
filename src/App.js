import React, {useState, useEffect} from 'react';

// Custom Components
import Header from './components/Header.js';
import DataSortingWindow from './components/DataSortingWindow.js';
import AlgoDescriptionContainer from './components/AlgoDescriptionContainer.js';

// Algorithms
import {bubbleSort} from './Algorithms/bubbleSort.js';
import {selectionSort} from './Algorithms/selectionSort.js';
import {insertionSort} from './Algorithms/insertionSort.js';
import {quickSort} from './Algorithms/quickSort.js';
import {mergeSort} from './Algorithms/mergeSort.js';
import {heapSort} from './Algorithms/heapSort.js';

// Material ui
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

// Utility
import {generateRandomUniqueUnorderedList} from './helperFunctions.ts'; // still works!

const ALGORITHMS = [
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort,
    mergeSort,
    heapSort
]

const ALGONAMES = ALGORITHMS.map(algo => algo.name);

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

    const [algorithm, setAlgorithm] = useState({
        name: '',
        description: '',
        performance: {
            best: '',
            average: '',
            worst: ''
        },
        algorithm: ''
    })
    const [dataSize, setDataSize] = useState('10');
    const [data, setData] = useState(null);
    const [barWidth, setBarWidth] = useState('');

    useEffect(() => {
        setDataSize('10');
        setData(generateRandomUniqueUnorderedList(10));
    }, []);

    useEffect(() => {
        setBarWidth(getBarWidth(dataSize));
    }, [dataSize])
    
    function handleAlgorithmSelection(index) {
        console.log(index);
;        setAlgorithm(ALGORITHMS[index]);
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
            <div>
                <Header 
                    algorithm={algorithm.name} 
                    listOfAlgorithms={ALGONAMES} 
                    algorithmSelected={handleAlgorithmSelection}
                    dataSize={dataSize}
                    listOfDataSizes={DATASIZES}
                    dataSizeSelected={handleListSizeSelection}
                    shuffleData={shuffleDataRequest}
                />
            </div>

            <div style={styles.layout}>
                <div style={styles.sortWindowAndControls}>
                    <div>
                        <DataSortingWindow data={data} barWidth={barWidth}/>
                    </div>

                    <div>Controls</div>
                </div>
                
                <AlgoDescriptionContainer
                    algoName={algorithm.name}
                    algoDescription={algorithm.description}
                    performance={algorithm.performance.average}
                />
            </div>
        </div>
    )
}

export default App;