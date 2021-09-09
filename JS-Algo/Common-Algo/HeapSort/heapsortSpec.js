describe('Testing Heapsort Algorithm', function() {

    it('Testing average case(O(nlogn) Time)', function() {
        //Pass
        let arr = [5, 12, 11, 13, 4, 6, 7];
       expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    it('worst case (O(nlogn) Time)', function() {
        //Pass
        let arr = [13, 12, 11, 7, 6, 5, 4];
        expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    it('Best case (O(nlogn) Time)', function() {
        //Pass
        let arr = [4, 5, 6, 7, 11, 12, 13];
        expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    it('Check if works for negative numbers', function() {
        //Pass
        let arr = [-1,-1,-1,-2,-1];
        expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    it('Check if there is only root value', function() {
        //Pass
        let arr = [-1];
        expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    it('Flatten an array', function() {
        //Pass
        let arr = [3, [5, 12, [[11, 13]], 4, 6, 7]];
        expect(heapSort(arr)).toEqual(arr.sort((a, b) => a - b))
    });

    // testing if [3, 2] is [2, 3]
    it('Testing swap correct1', function() {
        let arr = [3, 2];
        expect(swap(arr, 0, 1)).toEqual([2, 3])
    })

    it('Testing swap correct2', function() {
        let arr = [-1, 2];
        expect(swap(arr, 0, 1)).toEqual([2, -1])
    })


    it('Testing swap incorrect3', function() {
        //should return [1,2], here we check wrong order
        let arr = [2, 1];
        expect(swap(arr, 0, 1)).toEqual([2, 1])
    })

    it('Testing swap incorrect4', function() {
        //Error: Expected $[0] = undefined to equal 2.
        // Expected $[1] = undefined to equal 1.
        //Jasmine clearly told us it is out of index
        let arr = [2, 1];
        expect(swap(arr, 2, 3)).toEqual([2, 1])
    })
})
