const timeTest = require('./index').timeTest;
const chapter01 = require('../edition4/sort/chapter01');
const quickSort = require('../edition4/sort/chapter02').subject2;





timeTest(chapter01.subject3, 10000, '希尔排序');

console.log('=========');

timeTest(quickSort, 10000, '快速排序');