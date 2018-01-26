'use strict';
const _ = require('lodash');

function priorityQueue() {
    this.data = [];
    this.insert = insert;
    this.max = max;
    this.remove = remove;

    //插入 上浮
    function insert(ele) {
        if (_.isEmpty(this.data)) {
            this.data.push(ele);
        } else {
            this.data.push(ele);
            let i = this.data.length - 1;
            let j = parseInt((i - 1) / 2);
            while (j >= 0) {
                if (this.data[j] >= ele)
                    break;
                this.data[i] = this.data[j];
                i = j;
                j = (i - 1) / 2;
            }
            this.data[i] = ele;
        }

    }



    function max() {
        return this.data[0];
    }

    function remove() {
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        resize(this.data);
    }

    //下沉
    function resize(arr) {
        let i = 0;
        let temp = arr[i];
        while (2 * i < arr.length) {
            let leftNode = 2 * i + 1;
            let rightNode = leftNode + 1;
            if (leftNode < arr.length - 1 && arr[leftNode] < arr[rightNode]) {
                leftNode++;
            }
            if (arr[i] >= arr[leftNode]) {
                break;
            }
            arr[i] = arr[leftNode];
            arr[leftNode] = temp;
            i = leftNode;
        }
    }

}


module.exports = priorityQueue;