### 1. Write a function to find the longest common prefix string amongst an array of strings.
#### If there is no common prefix, return an empty string "".

#### Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

solution

##### 1 Approach

function findPreFix(arr) {
    if (arr.length === 0) return "";
    for (let i = 0; i < arr[0].length; i++) {
        let ch = arr[0][i];
        for (let j = 1; j < arr.length; j++) {
            if (arr[j][i] !== ch) {
                return arr[0].slice(0, i);
            }
        }
    }
    return arr[0];
}

##### 2 Approach

function findPreFix(arr){
    if(arr.length < 1) return false;
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while(arr[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
            if(prefix === '') return '';
        }
    }
    return prefix;
}


### 2. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

#### You may assume that each input would have exactly one solution, and you may not use the same element twice.
#### You can return the answer in any order.

#### Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

##### Approch 1 {Best Approach};

function findInd(nums, target){
    if(nums.length < 1) return [];
    const map = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(map[diff] !== undefined){
            return [map[diff], i];
        }   
        map[nums[i]] = i;
    }
    return [];   
}
console.log(findInd([3,2,4], 6))


### 3. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

#### For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

#### Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

#### I can be placed before V (5) and X (10) to make 4 and 9. 
#### X can be placed before L (50) and C (100) to make 40 and 90. 
#### C can be placed before D (500) and M (1000) to make 400 and 900.
#### Given a roman numeral, convert it to an integer.

 

##### Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

function convertRomanToNumber(s) {
    const obj = {
        'I' : 1,
        'V': 5,
        "X" : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let num = 0;
    let preValue = 0;

    for (let i = s.length - 1; i > -1; i--) {
        let currentValue = obj[s[i]];
        if(currentValue < preValue){
            num -= currentValue;
        }else {
            num += currentValue;
        }
        preValue = currentValue;
    }
    
    return num;
};


### 4. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

### Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

### The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

{
Problem ka Summary:
Tumhe ek sorted array diya gaya hai (matlab, elements already increasing order mein hain).
Tumhe duplicates ko hataana hai in-place (array ko change karte hue bina naye arrays banaye).
Tumhe k (unique elements ki count) return karni hai, aur array ke first k elements unique values honge, baaki values ignore ho sakti hain.
}

#### Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

#### Approach - 1

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) = output: 5


### 5. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

### Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

### Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
### Return k.

#### Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

#### Approach

function removeElement(arr, value){
    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if(arr[j] !== value){
            arr[i] = arr[j];
            i++
        }
    }

    return i;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 0)); // output : 6

### 6. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

##### Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

##### Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

##### Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

function searchInsert(arr, target){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= target) {
        return i;
      }
    }
    return arr.length;
}

console.log(searchInsert([1, 3, 5, 6], 5));


### 7. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

### Merge nums1 and nums2 into a single array sorted in non-decreasing order.

### The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

#### Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

#### Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].


var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6], n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);


### 8. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### An input string is valid if:

### Open brackets must be closed by the same type of brackets.
### Open brackets must be closed in the correct order.
### Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false


#### Approch - 1

function checkBrackets(str) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = []; // It always store closing brackets only.

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      stack.push(obj[str[i]]);
    } else if (stack.pop() !== str[i]) {
      return false;
    }
  }

  return stack.length === 0; // agr stack empty nhi hua mltb false hai.
}

console.log(checkBrackets("()")); // true;
console.log(checkBrackets("(]")); // false;