import { TrackChangesRounded } from '@material-ui/icons';
import { swap, createNewTracker, addStepToTracker, getSortedIndicesForRecursiveFunctions } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

// need to initialize tracker and pass to this function since it's recursive

export const MergeSortMain = (list:Array<number>):Tracker => {
    let tracker:Tracker = createNewTracker([...list]);
    MergeSort(list, tracker, [...list], 0, list.length-1);

    addStepToTracker(tracker, list, [], getSortedIndicesForRecursiveFunctions(list.length), [], 'finished sorting');

    return tracker;

}

// need to keep the tracker, original list, and the array of values being compared/swapped - how to grab indexes of the sublists? keep track of min and max index of the sub lists
export const MergeSort = (list:Array<number>, tracker:Tracker, originalList:Array<number>, indexMin:number, indexMax:number) => {
    if (list.length > 1) {
        // console.log('list passed to merge sort: ', list);
        let left:Array<number> = list.slice(0, list.length/2);
        let right:Array<number> = list.slice(list.length/2, list.length);

        let comparedIndices:Array<number> = [];
        for (let i=indexMin; i<=indexMax; i++) {
            comparedIndices.push(i);
        }
        addStepToTracker(tracker, [...originalList], comparedIndices, [], [], 'list passed to merge sort');

        // since left and right are sorted with the same original list instant passed, after the left side sorts, the right side has unsorted left side data even though the left side is sorted. 
        // the right side doesnt wait for the right side to sort and then grab the sorted left half. How to get it to wait, and then grab the sorted result for the right sort?
        // You CANNOT send the copy of the instant to merge sort, you need to send the actual object because it is being edit on each call!!!! You pass in the instant only when you add to the tracker!
        MergeSort(left, tracker, originalList, indexMin, indexMin + left.length-1); // keep track of the index range for each subarray passed to merge sort so you know which indexes to overwrite.
        MergeSort(right, tracker, originalList, indexMin + left.length, indexMax);
        // console.log('left and right AFTER mergesort: ', left, right);


        merge(list, left, right, tracker, originalList, indexMin); 
        addStepToTracker(tracker, [...originalList], [], [], [], 'merged');
        // console.log('list AFTER merging the following left and right:  ', left, right, 'list: ', list);
    }
}

function merge(a:Array<number>, left:Array<number>, right:Array<number>, tracker:Tracker, originalList:Array<number>, indexMin:number) {
    let leftIndex = 0;
    let rightIndex = 0; 
    let overwriteIndex = indexMin;

    for (let i=0; i<a.length; i++) {
        if (rightIndex >= right.length || (left[leftIndex] < right[rightIndex] && leftIndex < left.length)) {
            a[i] = left[leftIndex];
            leftIndex++;
            originalList[overwriteIndex++] = a[i]; // overwrite the array at the index
        } else {
            a[i] = right[rightIndex];
            rightIndex++;
            originalList[overwriteIndex++] = a[i];
        }

        addStepToTracker(tracker, [...originalList], [], [], [overwriteIndex - 1], 'overwrite from new array a');

    }

}


export const mergeSortInfo = {
    name: 'Merge Sort',
    description: 'For larger data sizes, merge sort is preferred over quick sort. Divide and conquer strategy',
    performance: {
        best: 'O(nlog n)',
        average: 'O(nlog n)',
        worst: 'O(nlog n)'
    },
    index: 4
}