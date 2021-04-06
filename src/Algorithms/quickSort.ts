import { createNewTracker, addStepToTracker, getSortedIndicesArray, swap } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

export const QuickSortMain = (list:Array<number>):Tracker => {
    let tracker:Tracker = createNewTracker([...list]);
    let sortedIndicesArray:Array<number> = [];
    QuickSort(list, tracker, sortedIndicesArray, 0, list.length-1);

    addStepToTracker(tracker, list, [], getSortedIndicesArray(list.length), [], 'sorted list');
    return tracker;
}


function QuickSort(list:Array<number>, tracker:Tracker, sortedIndicesArray:Array<number>, left:number, right:number) {
    if (left < right) {
        let j = partition(list, tracker, sortedIndicesArray, left, right);
        sortedIndicesArray.push(j);
        addStepToTracker(tracker, [...list], [], [...sortedIndicesArray], [], 'post partition');
        QuickSort(list, tracker, sortedIndicesArray, left, j-1);
        QuickSort(list, tracker, sortedIndicesArray, j+1, right);
    } else {
        sortedIndicesArray.push(left);
        addStepToTracker(tracker, [...list], [], [...sortedIndicesArray], [], 'base case, only one element - add to sorted');
    }
}

function partition(list:Array<number>, tracker:Tracker, sortedIndicesArray:Array<number>, start:number, end:number):number {
    const pivotIndex = start; // set pivot to first index of the list 
    let pivot = list[pivotIndex];
    addStepToTracker(tracker, [...list], [pivotIndex], [...sortedIndicesArray], [], `adding pivot to tracker. Pivot VALUE: ${pivot}`);
    let i = pivotIndex+1;
    let j = end;

    while (i < j) {
        while (list[i] < pivot) {
            addStepToTracker(tracker, [...list], [pivotIndex, i], [...sortedIndicesArray], [], 'incrementing i');
            i++;
            if (list[i] > pivot) addStepToTracker(tracker, [...list], [pivotIndex], [...sortedIndicesArray], [i], 'next i value breaks while loop, value at i is GREATER than pivot');
        }
        while (list[j] > pivot) {
            addStepToTracker(tracker, [...list], [pivotIndex, j], [...sortedIndicesArray], [], 'incrementing j');
            j--;
            if (list[j] < pivot) addStepToTracker(tracker, [...list], [pivotIndex], [...sortedIndicesArray], [j], 'next j value breaks while loop, value at j is LESS than pivot');

        }

        addStepToTracker(tracker, [...list], [pivotIndex, i, j], [...sortedIndicesArray], [], 'after i and j increment')


        if (i<j) {
            swap(list, i, j);
            addStepToTracker(tracker, [...list], [pivotIndex], [...sortedIndicesArray], [i, j], 'swapped i and j');
        }
    }
    if (list[j] < pivot) {
        swap(list, j, pivotIndex);
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