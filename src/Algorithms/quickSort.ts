import { createNewTracker, addStepToTracker, getSortedIndicesArray, swap } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

export const QuickSortMain = (list:Array<number>):Tracker => {
    let tracker:Tracker = createNewTracker([...list]);
    QuickSort(list, tracker, 0, list.length-1);

    addStepToTracker(tracker, list, [], getSortedIndicesArray(list.length), [], 'sorted list');
    return tracker;
}


function QuickSort(list:Array<number>, tracker:Tracker, left:number, right:number) {
    if (left < right) {
        let j = partition(list, tracker, left, right);
        addStepToTracker(tracker, [...list], [], [j], [], 'post partition');
        QuickSort(list, tracker, left, j-1);
        QuickSort(list, tracker, j+1, right);
    }
}

function partition(list:Array<number>, tracker:Tracker, start:number, end:number):number {
    // let pivot = list[end];
    // let leftPointer = start;

    // for (let j=start; j<end; j++) {
    //     // addStepToTracker(tracker, [...list], [leftPointer, j], [], [], 'comparing values to pivot');
    //     if (list[j] < pivot) {
    //         swap(list, leftPointer, j);
    //         addStepToTracker(tracker, [...list], [], [], [leftPointer, j], 'swapped');

    //         leftPointer++;
    //     }
    // }
    // swap(list, end, leftPointer);
    // addStepToTracker(tracker, [...list], [], [leftPointer], [end, leftPointer], 'swapped');
    //     return leftPointer;

    let pivot = list[start];
    let i = start+1;
    let j = end;
    // console.log(' *********************** START/END PARTITION ******************')
    // console.log('pivot: ', pivot);
    while (i < j) {
        while (list[i] < pivot) i++;
        while (list[j] > pivot) j--;

        console.log('i: ', i, 'j: ', j);
        if (i<j) {
            swap(list, i, j);
            console.log('indexes swapped, i: ', i, 'j: ', j);
            console.log('values swapped: ', list[i], list[j]);
            console.log('updated list: ', list);
        }
        console.log('exit while loop, nothing to swap');
    }
    if (list[j] < pivot) {
        swap(list, j, start);
        console.log('list after swapping pivot with j: ', list);
    }
    return j;

}



export const quickSortInfo = {
    name: 'Quick Sort',
    description: 'Quick sort is a divide and conquer sorting algorithm - it breaks the problem into subproblems and solves the subproblems in order to solve to main problem. It is a recursive algorithm that runs on the basis of sorting elements around a pivot that can initially be either the first/last/median element of the array. At each call of the algorithm, the array is partitioned into sub arrays at a pivot point that is greater/equal to all the elements before it and less than/equal to all the elements after it, ie it is in the final sorted position. It continually partitions the array in this manner until the final sorted list is achieved. It is the most popular sorting algorithm that handles relatively small data sizes incredibly well',
    performance: {
        best: 'O(nlog n)',
        average: 'O(nlog n)',
        worst: 'O(n^2)'
    },
    index: 3
}