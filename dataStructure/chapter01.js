'use strict';

module.exports = {
    //自大到小依次输出顺序读入的三个整数x,y,z的值。  尽可能的少比较和移动   最坏3次比较7次移动
    subject1: (x, y, z) => {
        let temp = 0;
        if (x < y) {
            temp = x;
            x = y;
            y = temp;
        }

        if (y < z) {
            temp = z;
            z = y;
            if (x >= temp)
                y = temp;
            else {
                y = x;
                x = temp;
            }
        }
        return `${x},${y},${z}`;
    },

    //顺序表递增有序，将x插入适当位置，保证该表的有序性
    subject2: (arr, x) => {
        if (Array.isArray(arr)) {
            let entries = arr.entries();
            let position = null;
            //找到插入位置
            for (let [index, value] of entries) {
                if (value >= x) {
                    position = index;
                    break;
                }
            }
            if (position !== null) {
                for (let j = arr.length - 1; j >= position; j--) {
                    arr[j + 1] = arr[j];
                }
            }
            arr[position] = x;
            return arr;
        }
    },

    //顺序表逆序  js中有reverse方法
    subject3: (arr) => {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length / 2; i++) {
                let temp = arr[i];
                arr[i] = arr[arr.length - 1 - i];
                arr[arr.length - 1 - i] = temp;
            }
            return arr;
        }
    },

    //A,B,C三个顺序序列，删除A中既存在B中又存在C中的元素  
    subject4: (a, b, c) => {
        //找到b,c中都存在的元素
        let arr = new Array();
        for (let bVal of b) {
            for (let cVal of c) {
                if (bVal === cVal)
                    arr.push(bVal);
            }
        }

        //在a中去出arr中的元素.
        const rebuildArr = (array, val) => {
            if (Array.isArray(array)) {
                let entries = array.entries();
                let position = null;
                //找到删除位置
                for (let [index, value] of entries) {
                    if (value === val) {
                        position = index;
                        break;
                    }
                }
                if (position !== null) {
                    for (let i = position; i < array.length - 1; i++) {
                        array[i] = array[i + 1];
                    }
                }
                array.pop();
                return array;
            }
        };
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (a[i] === arr[j]) {
                    a = rebuildArr(a, a[i]);
                }
            }
        }

        return a;
    }

};