function threeSum(arr, target) {
    // write your code here
        let diff = {};
        for (let i = 0; i < arr.length-2; i++) {
            for (let j = i+1; j < arr.length-1; j++) {
                for (let k = j+1; k < arr.length; k++) {
                    let sum = arr[i]+arr[j]+arr[k];
                    let cur_diff = Math.abs(sum-target);
                    diff[sum] = cur_diff;
                }
            }
        }  
    
        // console.log(diff, typeof diff);
        let min_value = Infinity;
        let min_sum;
        for (const key in diff) {
            // console.log(`${key}: ${diff[key]}`);
            if (diff[key] < min_value) {
                min_value = diff[key];
                min_sum = key;
            }
        }
        console.log(min_sum);
	return parseInt(min_sum);
    }


module.exports = threeSum;











