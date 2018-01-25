'use strict';
const _ = require('lodash');

module.exports = {
    timeTest: (fn, length, str) => {
        if (!_.isEmpty(str))
            console.log(str + ':');
        console.time('数组构造时间');
        let arr = Array.from({ length: length }, () => Math.floor(Math.random() * parseInt(length)));
        console.timeEnd('数组构造时间');
        console.time('排序时间');
        fn(arr, true);
        console.timeEnd('排序时间');
    },

    doubleTest: (fn, length) => {
        console.time('数组构造时间');
        let arr = Array.from({ length: length }, () => Math.floor(Math.random() * parseInt(length)));
        console.timeEnd('数组构造时间');
        console.time('排序时间');
        fn(arr, true);
        console.timeEnd('排序时间');

        console.time('2倍数组构造时间');
        let newArr = Array.from({ length: length * 2 }, () => Math.floor(Math.random() * parseInt(length) * 2));
        console.timeEnd('2倍数组构造时间');
        console.time('2倍数组排序时间');
        fn(newArr, true);
        console.timeEnd('2倍数组排序时间');
    }
};