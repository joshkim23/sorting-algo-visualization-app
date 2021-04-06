import { createNewTracker, addStepToTracker, getSortedIndicesArray } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

// need to initialize tracker and pass to this function since it's recursive

export const MergeSortMain = (list:Array<number>):Tracker => {
    let tracker:Tracker = createNewTracker([...list]);
    MergeSort(list, tracker, [...list], 0, list.length-1);

    addStepToTracker(tracker, list, [], getSortedIndicesArray(list.length), [], 'finished sorting');

    // console.log('sorted list!: ', list);
    return tracker;

}

// need to keep the tracker, original list, and the array of values being compared/swapped - how to grab indexes of the sublists? keep track of min and max index of the sub lists
function MergeSort(list:Array<number>, tracker:Tracker, originalList:Array<number>, indexMin:number, indexMax:number) {
    if (list.length > 1) {
        let left:Array<number> = list.slice(0, list.length/2);
        let right:Array<number> = list.slice(list.length/2, list.length);

        let comparedIndices:Array<number> = [];
        for (let i=indexMin; i<=indexMax; i++) {
            comparedIndices.push(i);
        }
        addStepToTracker(tracker, [...originalList], comparedIndices, [], [], 'list passed to merge sort');

        // since left and right are sorted with the same original list instant passed, after the left side sorts, the right side has unsorted left side data even though the left side is sorted. 
        // the right side doesnt wait for the right side to sort and then grab the sorted left half. How to get it to wait, and then grab the sorted result for the right sort? --> it DOES wait in the call stack. But the value you passed it originally was the copy at the instant, instead of the pointer which will point to the edited object after the left side calls. Need to send the pointer to the object to the recursive call for this to work.
        // You CANNOT send the copy of the instant to merge sort, you need to send the actual object because it is being edit on each call!!!! You pass in the instant only when you add to the tracker!
        MergeSort(left, tracker, originalList, indexMin, indexMin + left.length-1); // keep track of the index range for each subarray passed to merge sort so you know which indexes to overwrite.
        MergeSort(right, tracker, originalList, indexMin + left.length, indexMax);


        merge(list, left, right, tracker, originalList, indexMin); 
        addStepToTracker(tracker, [...originalList], [], [], [], 'merged');
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
    description: 'Merge sort is a recursive sorting algorithm that handles large data very efficiently by using the divide and conquer method. It runs on the idea of merging two lists that are each sorted relative to itself. Imagine you have two stacks of papers that are both alphabetically ordered and you want to combine the two stacks to be alphabetically ordered. You look at the top two papers and grab the earlier one in the alphabet and place it in a third pile. You then grab the next paper from the stack whose top paper you just put on the third pile and compare it to the other paper that you grabbed at first and continue this until one stack runs out. At this point you can put the rest of the remaining stack on the third pile and you have merged the stacks. Merge sort works on a similar principle by continually making subarrays within the list and merging them until you get the final sorted list.',
    performance: {
        best: 'O(nlog n)',
        average: 'O(nlog n)',
        worst: 'O(nlog n)'
    },
    index: 4
}