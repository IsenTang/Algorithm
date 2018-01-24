'use strict';

module.exports = {
    /**
     * 原地归并排序(手摇法)
     */
    subject1: (arr, flag, beg, mid) => {

        if (Array.isArray(arr)) {
            let i = beg;
            let j = mid;
            if (!flag) {
                while (i < j && j < arr.length) //原地归并结束的条件。
                {
                    while (i < j && arr[i] <= arr[j]) {
                        i++;
                    }
                    let index = j;
                    while (j <= arr.length && arr[j] <= arr[i]) {
                        j++;
                    }
                    let step = j - index;
                    //移动插入
                    for (let k = 0; k < step; k++) {
                        let temp = arr[index];
                        for (let f = index; f > i; f--) {
                            arr[f] = arr[f - 1];
                        }
                        index++;
                        arr[i] = temp;
                        i++;
                    }
                }
            }
            return arr;
        }
    }
};