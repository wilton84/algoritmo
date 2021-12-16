const slidingWindow = (arr, k) => {
    let start= 0;
    let max = 0;
    let sum = 0; 

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        if (end >= k-1) {
            max = Math.max(max, sum);
            sum -= arr[start];
            start++;
        }
    }
    console.log(max);
    return max;

}

slidingWindow([2,1,5,1,3,2], 3);