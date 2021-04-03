export interface TrackerStep {
    array: Array<number>
    sortedIndices: Array<number>
    comparing: Array<number>
    swapped: Array<number>
}

export interface Tracker {
    steps: Array<TrackerStep>
}