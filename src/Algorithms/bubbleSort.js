import { swap, createNewTracker, addStepToTracker } from '../helperFunctions.ts';

export const BubbleSort = (list) => {
    let tracker = createNewTracker(list);
    console.log('tracker: ', tracker);
    let sortedIndices = [];

    for(let lastKnownSortedElementIndex = list.length-1; lastKnownSortedElementIndex>1; lastKnownSortedElementIndex--) { // outer loop, need to run swapping algorithm up to last known sorted element -1; with this algorithm the elements are sorted right to left
        if (lastKnownSortedElementIndex < list.length-1) addStepToTracker(tracker, list, [], sortedIndices.push(lastKnownSortedElementIndex))
        // console.log('tracker: ', tracker);

        for (let i=0; i<lastKnownSortedElementIndex; i++) { // inner loop running the swap algorithm from the first index to the last known sorted element -1;
            addStepToTracker(tracker, list, [i, i+1], [], [])
            if(list[i] > list[i+1]) {
                swap(list, i, i+1);
                const deepCopyOfListAtInstant = JSON.parse(JSON.stringify(list));
                console.log(deepCopyOfListAtInstant);

                addStepToTracker(tracker, deepCopyOfListAtInstant, [], [], [i, i+1]);
            }
        }
    }
    // console.log('sorted list! ', list);
    return list;

}

export const bubbleSortInfo = {
    name: 'Bubble Sort',
    description: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems',
    performance: {
        best: 'O(n)',
        average: 'O(n^2)',
        worst: 'O(n^2)'
    }
}

 
// get name, get description, somehow get the algorithm and visually edit and show the data that's passed to it...
