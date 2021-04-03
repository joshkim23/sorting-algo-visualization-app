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
    console.log('generated new unordered list: ', list);
    return list;
}

export function createNewTracker(list:Array<number>):Tracker {
    let tracker:Tracker = {
        steps: [{
            array: list,
            sortedIndex: [],
            comparing: [],
            swapped: []
        }]
    };
    
    return tracker;
}

export function addStepToTracker(tracker:Tracker, listInstant:Array<number>, comparing:Array<number>, sorted:Array<number>, swapped:Array<number>) {
    const newStep:TrackerStep = {
        array: listInstant,
        sortedIndex: sorted,
        comparing: comparing,
        swapped: swapped
    }
    tracker.steps.push(newStep);
}