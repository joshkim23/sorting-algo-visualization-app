import React, {useState, useEffect} from 'react';

// Custom Components
import Header from './components/Header.js';
import DataSortingWindow from './components/DataSortingWindow.js';
import AlgoDescriptionContainer from './components/AlgoDescriptionContainer.js';
import SortingStepControls from './components/SortingStepControls.js';

// Interface
// import {Tracker} from './IterationTrackerInterface.ts';

// Algorithms
import {bubbleSortInfo, BubbleSort} from './Algorithms/bubbleSort.ts';
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
        },
        index: null
    })
    const [dataSize, setDataSize] = useState('10');
    const [data, setData] = useState(null);
    const [barWidth, setBarWidth] = useState('');
    const [tracker, setTracker] = useState({
        steps: []
    })
    let [trackerIndex, setTrackerIndex] = useState(0);
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
    
    /* functions for managing the tracker */
    function run() {
        const trackerStepSnippetFromIndex = tracker.steps.filter((step, index) => index >= trackerIndex )

        console.log(trackerIndex);
        console.log(trackerStepSnippetFromIndex);

        trackerStepSnippetFromIndex.forEach((step, index) => {
            setTimeout(() => {
                setSortingData(step);
            }, 250 * index);
        });
        
        // setTrackerIndex(0);
    }


    function handlePreviousStep() {
        if (sortingData !== data) {
            setTrackerIndex(trackerIndex - 1);
            setSortingData(tracker.steps[trackerIndex - 1]);
        }
    }

    function handleNextStep() {
        if (sortingData !== sortedData) {
            setTrackerIndex(trackerIndex + 1);
            setSortingData(tracker.steps[trackerIndex + 1]);
        }
    }
    
    /* functions for algorithm selection, element size, shuffling */
    function handleAlgorithmSelection(index) {
        console.log(index);
        setAlgorithmInfo(ALGOINFO[index]);
        // setData(generateRandomUniqueUnorderedList(parseInt(dataSize))); // make new state for completed - only do on completed
        if (ALGOINFO[index].name === 'Bubble Sort' && !algorithmInfo.index) {
            getSpecificAlgorithmTracker(index, sortingData? sortingData.array : data); // for some reason, without this it will send the sorted list - so when you click the same alogirthm twice it solves it automatically. needs investigation but this fixes it
        }
    }

    function handleListSizeSelection(index) {
        console.log('Data size changed - data size: ', DATASIZES[index]);
        setSortingData(null); // sorting data is only sent to child once the algorithm runs and we have the tracker

        setDataSize(DATASIZES[index]);
        setBarWidth(getBarWidth(DATASIZES[index]));
        const newList = generateRandomUniqueUnorderedList(parseInt(DATASIZES[index]));
        setTrackerIndex(0);
        
        setData(newList);
        if (algorithmInfo.index !== null) {
            getSpecificAlgorithmTracker(algorithmInfo.index, newList);
        }
    }

    function shuffleDataRequest() {
        setSortingData(null);
        setTrackerIndex(0);
        const newList = generateRandomUniqueUnorderedList(parseInt(dataSize));
        setData(newList);
        if (algorithmInfo.index !== null) {
            getSpecificAlgorithmTracker(algorithmInfo.index, newList);
        }
    }

    // The steps for an algorithm are stored in a tracker object which has an array of steps that are iterated to display the algorithm visually
    // need to pass the new unique array to this function to get a tracker of the updated list since JS is asynchornous - it doesnt grab the setData() value from the functions before it so it calculates the tracker for the list before the size was changd/shuffle button was clicked
    function getSpecificAlgorithmTracker(index, duplicateListBecauseJsIsAsynchronous) {
        console.log('list sent to the get tracker function: ', duplicateListBecauseJsIsAsynchronous);
        let tracker;
        
        if (algorithmInfo.index === null) { // first time selecting an algorithm 
            tracker = ALGORITHMS[index](duplicateListBecauseJsIsAsynchronous); 
        } else { // selecting a new algorithm
            tracker = ALGORITHMS[algorithmInfo.index](duplicateListBecauseJsIsAsynchronous); 
        }

        setTracker(tracker);
        console.log('NEW tracker generated: ',tracker);

        setSortedData(tracker.steps[tracker.steps.length-1].array);
        setSortingData(tracker.steps[0]);
    }


    return (
        <div style={styles.overlay}>
            <Header 
                algorithm={algorithmInfo.name} 
                listOfAlgorithms={ALGONAMES} 
                algorithmSelected={handleAlgorithmSelection}
                dataSize={dataSize}
                listOfDataSizes={DATASIZES}
                dataSizeSelected={handleListSizeSelection}
                shuffleData={shuffleDataRequest}
            />

            <div style={styles.layout}>
                <div style={styles.sortWindowAndControls}>
                    <DataSortingWindow 
                        data={sortingData? sortingData.array : data} 
                        comparing={sortingData? sortingData.comparing : null}
                        swapped={sortingData? sortingData.swapped : null}
                        sorted={sortingData? sortingData.sortedIndices : null}
                        barWidth={barWidth}
                    />

                    <SortingStepControls 
                        handleNextButton={handleNextStep}
                        handlePrevButton={handlePreviousStep}
                        sortButton={run}
                    />
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