import { swap, createNewTracker, addStepToTracker, getSortedIndicesArray } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

export const InsertionSort = (list:Array<number>):Tracker => {
    // console.log('list sent to insertion sort', list);
    let tracker:Tracker = createNewTracker([...list]);

    for (let lastVirtuallySortedIndex = 1; lastVirtuallySortedIndex < list.length; lastVirtuallySortedIndex++) {
        let indexToInsert = lastVirtuallySortedIndex;

        if (lastVirtuallySortedIndex > 1) {
            addStepToTracker(tracker, [...list], [], [], [], 'element inserted to virutal sorted list');
        }

        while ((list[indexToInsert] < list[indexToInsert - 1]) &&  indexToInsert > 0) {
            addStepToTracker(tracker, [...list], [indexToInsert, indexToInsert-1], [], [], 'comparing two elements');
            swap(list, indexToInsert, indexToInsert-1);
            addStepToTracker(tracker, [...list], [], [], [indexToInsert, indexToInsert-1], 'swapped two elements');

            indexToInsert--;
        }
    }

    addStepToTracker(tracker, list, [], getSortedIndicesArray(list.length), [], 'finished sorting');
    // console.log('sorted list: ', list);

    return tracker;
}

export const insertionSortInfo = {
    name: 'Insertion Sort',
    description: 'Insertion sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.',
    performance: {
        best: 'O(n)',
        average: 'O(n^2)',
        worst: 'O(n^2)'
    },
    index: 2
}