function countAnalogousArrays(consecutiveDifference, lowerBound, upperBound) {
    let maxDiff = -Infinity;
    let minDiff = Infinity;
    let runningSum = 0;

    consecutiveDifference.forEach((diff) => {
        runningSum += diff;

        if(runningSum > maxDiff) {
            maxDiff = runningSum;
        }

        if(runningSum < minDiff) {
            minDiff = runningSum;
        }
    })

    let maxValidUpperBound = upperBound + minDiff < upperBound ? upperBound + minDiff : upperBound;
    let minValidLowerBound = lowerBound + maxDiff > lowerBound ? lowerBound + maxDiff : lowerBound;

    if(maxValidUpperBound > minValidLowerBound) {
        return maxValidUpperBound - minValidLowerBound + 1
    } else {
        return 0
    }
}

console.log(countAnalogousArrays([-2, -1, -2, 5], 3, 10))