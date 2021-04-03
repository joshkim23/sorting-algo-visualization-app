import React, {useState, useEffect} from 'react';

// Custom Components
import Header from './components/Header.js';
import DataSortingWindow from './components/DataSortingWindow.js';
import AlgoDescriptionContainer from './components/AlgoDescriptionContainer.js';
import SortingStepControls from './components/SortingStepControls.js';

// Interface
// import {Tracker} from './IterationTrackerInterface.ts';

// Algorithms
import {bubbleSortInfo, BubbleSort} from './Algorithms/bubbleSort.js';
import {selectionSortInfo} from './Algorithms/selectionSort.js';
import {insertionSortInfo} from './Algorithms/insertionSort.js';
import {quickSortInfo} from './Algorithms/quickSort.js';
import {mergeSortInfo} from './Algorithms/mergeSort.js';
import {heapSortInfo} from './Algorithms/heapSort.js';

// Material ui
// import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

// Utility
import {generateRandomUniqueUnorderedList} from './helperFunctions.ts'; // still works!

const ALGOINFO = [
    bubbleSortInfo,
    selectionSortInfo,
    insertionSortInfo,
    quickSortInfo,
    mergeSortInfo,
    heapSortInfo
]

const ALGORITHMS = [
    BubbleSort
]

const ALGONAMES = ALGOINFO.map(algo => algo.name);

const DATASIZES = ['5', '10', '25', '50', '100'];

// const SPEEDS = ['0.25x', '0.5x', '1.0x', '1.5x', '2.0x'];

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
            height: '500px',
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
        },
        descriptionWindow: {
            display: 'grid',
            overflowY: 'scroll',
            borderRadius: '10px',
            padding: '15px',
            backgroundColor: `${grey["800"]}`,
            color: `${green["600"]}`,
        }
    }

    const [algorithmInfo, setAlgorithmInfo] = useState({
        name: '',
        description: '',
        performance: {
            best: '',
            average: '',
            worst: ''
        }
    })
    const [dataSize, setDataSize] = useState('10');
    const [data, setData] = useState(null);
    const [barWidth, setBarWidth] = useState('');
    const [tracker, setTracker] = useState({
        steps: []
    })
    const [trackerIndex, setTrackerIndex] = useState(0);
    const [sortingData, setSortingData] = useState({
        array: [],
        comparing: [],
        sortedIndices: [],
        swapped: []
    }); // the data that's initially a deep copy of data then iterates through tracker.steps - this is what's sent to the data sorting window
    const [sortedData, setSortedData] = useState(null); // sorted array stored as soon as sorting algo is selected ahead of time to check

    useEffect(() => {
        setDataSize('10');
        setData(generateRandomUniqueUnorderedList(10));
        setSortingData(null);
    }, []);

    useEffect(() => {
        setBarWidth(getBarWidth(dataSize));
    }, [dataSize])

    
    // Need a way to implement the algorithm here, import it. 
    // If you wanna make it general... need to have standardized values across all algorithms in each step like indexes you're comparing, step, the list after each iteration, etc.
    // Keep track of the process, store it in a call stack? so you can go backwards if desired. For now just make it go at one speed without being able to go backwards
    // Need to send the data, and the indexes of the elements that are being compared. So within the for loop, you need to update the props passed down to the chart so it renders the bars with the color and new data 

    // probably want to run like 25ms for 100elements. 
    function run() {
        tracker.steps.forEach(step => {
            setTimeout(() => {
                setSortingData(step);
            }, 100);
        });
    }

    function handleNextStep() {
        if (sortingData !== sortedData) {
            setTrackerIndex(trackerIndex + 1);
            // setSortingData(tracker.steps[trackerIndex + 1].array);
            setSortingData(tracker.steps[trackerIndex + 1]);

        }
    }
    
    function handleAlgorithmSelection(index) {
        console.log(index);
        setAlgorithmInfo(ALGOINFO[index]);
        // setData(generateRandomUniqueUnorderedList(parseInt(dataSize))); // make new state for completed - only do on completed
        if (ALGOINFO[index].name === 'Bubble Sort') {
            console.log('list before sorting: ', data);
            const tracker = ALGORITHMS[0]([...data]); // RUN THE ALGORITHM, store all the steps in the variable tracker. 
            setTracker(tracker);
            console.log(tracker);

            setSortedData(tracker.steps[tracker.steps.length-1].array);
            // setSortingData(tracker.steps[trackerIndex + 1]);
            setSortingData(tracker.steps[0]);
        }
    }

    function handleListSizeSelection(index) {
        setDataSize(DATASIZES[index]);
        setBarWidth(getBarWidth(DATASIZES[index]));
        setData(generateRandomUniqueUnorderedList(parseInt(DATASIZES[index])));
        setSortingData(null);
    }

    function shuffleDataRequest() {
        setSortingData(null);
        setData(generateRandomUniqueUnorderedList(parseInt(dataSize)));
        if (algorithmInfo) {
            // TODO - right now when you select an algorithm, thats the only time it calculates the tracker. If you select the algo then shuffle OR change the elements # it will sort the old array. 
        }
    }

    function getBarWidth() {
        switch(parseInt(dataSize)) {
            case 5:
                return '20%';
            case 10:
                return '10%';
            case 25:
                return '4%';
            case 50: 
                return '2%';
            case 100:
                return '1%';
            default: 
                return '5%';
        }
    }

    return (
        <div style={styles.overlay}>
            {/* <div> */}
                <Header 
                    algorithm={algorithmInfo.name} 
                    listOfAlgorithms={ALGONAMES} 
                    algorithmSelected={handleAlgorithmSelection}
                    dataSize={dataSize}
                    listOfDataSizes={DATASIZES}
                    dataSizeSelected={handleListSizeSelection}
                    shuffleData={shuffleDataRequest}
                />
            {/* </div> */}

            <div style={styles.layout}>
                <div style={styles.sortWindowAndControls}>
                    <DataSortingWindow 
                        data={sortingData? sortingData.array : data} 
                        comparing={sortingData? sortingData.comparing : null}
                        swapped={sortingData? sortingData.swapped : null}
                        sorted={sortingData? sortingData.sortedIndices : null}
                        barWidth={barWidth}/>

                    <SortingStepControls 
                        handleNextButton={handleNextStep}
                        sortButton={run}/>
                </div>
                
                <AlgoDescriptionContainer
                    algoName={algorithmInfo.name}
                    algoDescription={algorithmInfo.description}
                    performance={algorithmInfo.performance.average}
                />
            </div>
        </div>
    )
}

export default App;