export interface TrackerStep {
    array: Array<number>
    sortedIndex: Array<number>
    comparing: Array<number>
    swapped: Array<number>
}

export interface Tracker {
    steps: Array<TrackerStep>
}