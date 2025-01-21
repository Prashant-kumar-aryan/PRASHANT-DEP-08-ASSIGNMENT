/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequency = new Map();
    const bucket = Array(nums.length + 1).fill().map(() => []);
    const ans = [];
    
    // Count the frequency of each number
    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }
    
    // Populate the bucket array with numbers based on their frequencies
    for (const [num, freq] of frequency) {
        bucket[freq].push(num);
    }
    
    // Collect the top k frequent elements
    for (let i = bucket.length - 1; i > 0; i--) {
        for (const num of bucket[i]) {
            if (ans.length === k) return ans;
            ans.push(num);
        }
    }
    
    return ans;
};