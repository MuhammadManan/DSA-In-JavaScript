/*
Problem Name: Two Sum (Unsorted Array)
Problem Statement

Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
*/

/**
 * Two Sum - HashMap Solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  // Write your code 
  let map={};
  console.log(map);

  for(let i=0; i<nums.length; i++){
    console.log("i : ", i);
    let complement = target - nums[i];
    console.log("complement : ", complement);
    
    if(map[complement] !== undefined){
        console.log('map inside if : ', map);
        return [map[complement],i];
    }

    map[nums[i]] = i;
    console.log("map : ", map);
  }

}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Expected output: [0, 1]


