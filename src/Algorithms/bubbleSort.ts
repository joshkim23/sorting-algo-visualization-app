import { swap, createNewTracker, addStepToTracker } from '../helperFunctions';
import { Tracker } from '../IterationTrackerInterface';

export const BubbleSort = (list: Array<number>):Tracker => {
    console.log('list sent to bubble sort', list);
    const initialList:Array<number> = [...list]; // need to make deep copy of the list before it sorts or else every step of the tracker will have the same array - the final sorted array, because they're all pointing to the same object! 
    let tracker:Tracker = createNewTracker(initialList);
    let sortedIndices:Array<number> = [];

    for(let lastKnownSortedElementIndex = list.length-1; lastKnownSortedElementIndex>=1; lastKnownSortedElementIndex--) { // outer loop, need to run swapping algorithm up to last known sorted element -1; with this algorithm the elements are sorted right to left
        let deepCopy1 = [...list];
        if(lastKnownSortedElementIndex< list.length-1) {
            sortedIndices.push(lastKnownSortedElementIndex+1);
            addStepToTracker(tracker, deepCopy1, [], [...sortedIndices], [], 'last known sorted el is less than the end');
        }
        

        for (let i=0; i<lastKnownSortedElementIndex; i++) { // inner loop running the swap algorithm from the first index to the last known sorted element -1;
            addStepToTracker(tracker, [...list], [i, i+1], [...sortedIndices], [], 'new iteration of i'); // comparing values at index i and i+1

            if(list[i] > list[i+1]) { // if left value is greater than right value, SWAP them. If i
                swap(list, i, i+1);
                const deepCopyOfListAtInstant = [...list];

                addStepToTracker(tracker, deepCopyOfListAtInstant, [], [...sortedIndices], [i, i+1], 'AFTEr swapping');
            }
        }
    }

    // Need to add the final step with the same array to updated the sorted values for colors. Without this, it colors the last comparison yellow
    while (list.length !== sortedIndices.length) {
        sortedIndices.push(list.length-sortedIndices.length - 1);
    }

    addStepToTracker(tracker, list, [], sortedIndices, [], 'FINISHED SORTING');
    console.log('sorted list! ', list);
    return tracker;

}

export const bubbleSortInfo = {
    name: 'Bubble Sort',
    description: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems',
    performance: {
        best: 'O(n)',
        average: 'O(n^2)',
        worst: 'O(n^2)'
    },
    index: 0
}

 
// get name, get description, somehow get the algorithm and visually edit and show the data that's passed to it...
