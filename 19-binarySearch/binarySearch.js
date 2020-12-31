class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let min = 0;
    let max = nums.length - 1;
    while (min <= max)
    {
        let average = Math.floor((min + max)/2);
        if (nums[average] == target)
            return true;
        else if (nums[average] < target)
        {
            min = average + 1;
            this.binarySearch(min, target);
        }
        else if(nums[average] > target)
        {
            max = average - 1;
            this.binarySearch(max, target);
        }
    }
  return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;