import React, {useState, useEffect} from 'react';
import Header from './components/Header.js';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
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

const App = () => {
    const styles = {
        overlay: { // need this AND <style> in index.html to make the div FULL screen!!
            backgroundColor: `${grey["900"]}`,
            position: 'fixed',
            width: '100%',
            height: '100%',
            display: 'grid'
        }, 
        layout: {
            display: 'grid',
            gridTemplateColumns: '5fr 2fr',
            gridGap: '20px',
            padding: '50px 30px 50px 30px',
        },
        sortWindowAndControls: {
            display: 'grid',
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

    useEffect(() => {
        setAlgorithm('');
        setDataSize('10');
        setData(generateRandomUniqueUnorderedList(10));
    }, [])
    
    function handleAlgorithmSelection(index) {
        setAlgorithm(ALGORITHMS[index]);
    }

    function handleListSizeSelection(index) {
        setDataSize(DATASIZES[index]);
        setData(generateRandomUniqueUnorderedList(parseInt(DATASIZES[index])));
    }

    const shuffleDataRequest = () => generateRandomUniqueUnorderedList(parseInt(dataSize));

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
                    <div>sortingWindow</div>
                    <div>Controls</div>
                </div>
                
                <div style={styles.descriptionWindow}>Algorithm Information</div>
            </div>
        </div>
    )
}

export default App;