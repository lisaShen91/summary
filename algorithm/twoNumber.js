
//求两数之和等于目标数
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [nums[i], nums[j]]
//             }
//         }
//     }
//     return [];
// };
var twoSum = function(nums, target) {
    const map = new Map();
    for (var i=0;i<nums.length;i++) {
        var otherIndex = map.get(target -nums[i]);
        if (otherIndex !== undefined) return [otherIndex, i];
        map.set(nums[i], i);
    }
}

let r = twoSum([3,2,4], 6);
console.log(r);