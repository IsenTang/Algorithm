'use strict';

module.exports = {
    /**
     * 选择排序 （Selection sort）
     * @param arr
     * @param flag true 降序  false 升序
     */
    subject1: (arr, flag) => {
        if (Array.isArray(arr)) {
            if (flag) {
                for (let i = 0; i < arr.length - 1; i++) {
                    let index = i;
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[index] < arr[j])
                            index = j;
                    }
                    if (i !== index) {
                        let temp = arr[i];
                        arr[i] = arr[index];
                        arr[index] = temp;
                    }
                }
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    let index = i;
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[index] > arr[j])
                            index = j;
                    }
                    if (i !== index) {
                        let temp = arr[i];
                        arr[i] = arr[index];
                        arr[index] = temp;
                    }
                }
            }
            return arr;
        }
    },

    /**
     * 插入排序 （Insertion sort）
     */
    subject2: (arr, flag) => {
        if (Array.isArray(arr)) {
            if (flag) {
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i - 1] < arr[i]) {
                        let temp = arr[i];
                        let j = i;
                        while (j > 0 && arr[j - 1] < temp) {
                            arr[j] = arr[j - 1];
                            j--;
                        }
                        arr[j] = temp;
                    }
                }
            } else {
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i - 1] > arr[i]) {
                        let temp = arr[i];
                        let j = i;
                        while (j > 0 && arr[j - 1] > temp) {
                            arr[j] = arr[j - 1];
                            j--;
                        }
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }
    },

    //希尔排序  （Shell's Sort）
    subject3: (arr, flag) => {
        if (Array.isArray(arr)) {
            if (flag) {
                //i 步长
                for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
                    for (let k = 0; k < gap; k++) {
                        for (let i = k + gap; i < arr.length; i += gap) {
                            //插入排序
                            if (arr[i] > arr[i - gap]) {
                                let temp = arr[i];
                                let j = i;
                                while (j > 0 && arr[j - gap] < temp) {
                                    arr[j] = arr[j - gap];
                                    j -= gap;
                                }
                                arr[j] = temp;
                            }
                        }
                    }
                }
            } else {
                for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
                    for (let k = 0; k < gap; k++) {
                        for (let i = k + gap; i < arr.length; i += gap) {
                            //插入排序
                            if (arr[i] < arr[i - gap]) {
                                let temp = arr[i];
                                let j = i;
                                while (j > 0 && arr[j - gap] > temp) {
                                    arr[j] = arr[j - gap];
                                    j -= gap;
                                }
                                arr[j] = temp;
                            }
                        }
                    }
                }
            }
            return arr;
        }
    }
};