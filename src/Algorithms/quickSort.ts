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
    }
    return j;

}



export const quickSortInfo = {
    name: 'Quick Sort',
    description: 'Quick sort runs on the basis of sorting elements around a pivot that can be randomly selected, or at the beginning/end of the array. At each call of the algorithm, the array is partitioned in two by swapping all elements smaller than the pivot with elements larger than the pivot, then swapping the pivot with the largest element that is smaller than the pivot. This effectively places the pivot in its final sorted position since all the elements are smaller and all elements after are greater. This method is called recursively with the remaining subarrays until all elements are sorted. It is the most popular sorting algorithm that handles relatively small data sizes incredibly well. In this variation of quick sort, the first element is selected as the pivot and then two pointers iterate through the rest of the subarray, one from the left, one from the right. Both pointers iterate into one another until they reach a value that is unsorted  relative to the pivot, or the pointers cross. For the left pointer, it will stop when it reaches a value that is greater than the pivot, and the right pointer will stop when it reaches a value that is less than the pivot. Once the pointers stop the values will be swapped, and the pointers continue.',
    performance: {
        best: 'O(nlog n)',
        average: 'O(nlog n)',
        worst: 'O(n^2)'
    },
    index: 3
}