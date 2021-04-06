import {Tracker, TrackerStep} from './IterationTrackerInterface';
// swaps values in an array at the two indexes
export function swap(list:Array<number>, i1:number, i2:number):void {
    const temp:number = list[i1];
    list[i1] = list[i2];
    list[i2] = temp;
}

// generates an array of data points that are unique and unordered. Range of values is 3* the request list length to give an adequate range of values.
export function generateRandomUniqueUnorderedList(size:number):Array<number> {
    const valueRange = size*2;
    let previouslyUsedValues:Set<number> = new Set<number>();
    let list = [];

    while(list.length !== size) {
        let newValue = Math.floor(Math.random()*valueRange);
        if (!previouslyUsedValues.has(newValue) && newValue !== 0 && newValue >= .1 * valueRange) {
            previouslyUsedValues.add(newValue);
            list.push(newValue);
        }
    }
    // console.log('NEW randomized list generated: ', list);
    return list;
}

// creates an array from indicies from 0 up to the specified length-1 for algorithms that don't sort everything until the end
export function getSortedIndicesArray(length:number):Array<number> {
    let sortedIndices:Array<number> = [];
    for (let i=0; i<length; i++) {
        sortedIndices.push(i);
    }
    return sortedIndices;
}

// creates a NEW tracker object where each index in the steps array is a step in the algorithm.
export function createNewTracker(list:Array<number>):Tracker {
    let tracker:Tracker = {
        steps: [{
            array: list,
            sortedIndices: [],
            comparing: [],
            swapped: [],
            stepDescription: 'added list to tracker'
        }]
    };
    
    return tracker;
}

// this adds a step to the tracker object for each new step in a sorting algorithm. It is a snapshot in time that stores the data, compared indices, sorted indices, and swapped indices at each specific instant of time
export function addStepToTracker(tracker:Tracker, listInstant:Array<number>, comparing:Array<number>, sorted:Array<number>, swapped:Array<number>, step:string) {
    const newStep:TrackerStep = {
        array: listInstant,
        sortedIndices: sorted,
        comparing: comparing,
        swapped: swapped,
        stepDescription: step
    }
    tracker.steps.push(newStep);
}

// TO DO - add functionality for selecting and coloring the pivot element at each partition of quick sort. Currently it's in the comparing category. 
// Need to update app.js to handle datasortingwindow.js to handle a pivot array, create a new interface for quicksorttrackerstep that includes different names maybe? 
 
// export function quickSortAddStepToTracker(tracker:Tracker, listInstant:Array<number>, pivotIndex: Array<number>, )