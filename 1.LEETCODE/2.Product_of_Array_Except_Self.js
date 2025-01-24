/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let prefix = new Array(n);
    let suffix = new Array(n);
    prefix[0]=nums[0];
    suffix[n-1]=nums[n-1];
    for(let i = 1 ; i < n ; i++){
        prefix[i]=prefix[i-1]*nums[i];
        suffix[n-i-1]=suffix[n-i]*nums[n-i-1];
    }
    let ans = new Array(n);
    for(let i = 0 ; i < n ; i++){
        let curr =  1;
        if(i-1>-1)curr=curr*prefix[i-1];
        if(i+1<n)curr=curr*suffix[i+1];
        ans[i]=curr;
    }
    return ans;
};