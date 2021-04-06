import { swap, createNewTracker, addStepToTracker } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

export const SelectionSort = (list: Array<number>):Tracker => {
    console.log('list sent to selection sort: ', list);
    let tracker:Tracker = createNewTracker([...list]);
    let sortedIndices:Array<number> = [];

    for (let lastKnownSortedIndex = -1; lastKnownSortedIndex < list.length; lastKnownSortedIndex++) {
        let indexOfSmallestValue = lastKnownSortedIndex + 1;

        if(lastKnownSortedIndex > -1) {
            sortedIndices.push(lastKnownSortedIndex);
            addStepToTracker(tracker, [...list], [], [...sortedIndices], [], 'after one pass of the algorithm')
        }

        for (let i=lastKnownSortedIndex + 1; i<list.length; i++) {
            addStepToTracker(tracker, [...list], [i, indexOfSmallestValue], [...sortedIndices], [], 'increment of i, comparing inner loop values to selected value');

            if (list[i] < list[indexOfSmallestValue]) { // new selected lowest value
                swap(list, i, indexOfSmallestValue);

                addStepToTracker(tracker, [...list], [], [...sortedIndices], [i, indexOfSmallestValue], 'lowest value swapped with beginning of last known sorted index');
            }
        }

    }

    addStepToTracker(tracker, list, [], sortedIndices, [], 'FINISHED SORTING');

    console.log('sorted list!', list);
    return tracker;
}

export const selectionSortInfo = {
    name: 'Selection Sort',
    description: 'Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.',
    performance: {
        best: 'O(n^2)',
        average: 'O(n^2)',
        worst: 'O(n^2)'
    },
    index: 1
}