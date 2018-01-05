'use strict';
const Stack = require('../base/stack');
const Queue = require('../base/queue');

module.exports = {
    //利用栈特性，进行数制转换，非负十进制转换成各种进制
    subject1: (num, n) => {
        let stack = new Stack();
        let remainder = 0; //余数
        while (num > 0) {
            remainder = num % n;
            stack.push(remainder);
            num = parseInt(num / n);
        }
        let result = '';
        while (!stack.isEmpty()) {
            result += stack.pop() + '';
        }
        return result;
    },

    //括号匹配检验  [()[]()]
    subject2: (str) => {
        let arr = str.split('');
        let stack = new Stack();

        const compare = (pre, suf) => {
            if (pre === '[' & suf === ']')
                return true;
            if (pre === '{' & suf === '}')
                return true;
            if (pre === '(' & suf === ')')
                return true;
            return false;
        };

        for (let value of arr) {
            let result = compare(stack.peek(), value);
            if (!result)
                stack.push(value);
            else
                stack.pop();
        }

        if (stack.isEmpty())
            return true;
        else
            return false;
    },

    //hanoi塔（汉诺塔） x->z
    /**
     * @param n 圆盘数
     */
    subject3: (n, x, y, z) => {
        let count = 0;
        const move = (n, x, y, z) => {
            if (n === 1) {
                count++;
            } else {
                move(n - 1, x, z, y);
                count++;
                move(n - 1, y, x, z);
            }
        };
        move(n, x, y, z);

        return count;

    },

    //回文 'abeba' 'abba'
    subject4: (str) => {
        let arr = str.split('');
        let stack = new Stack();
        let queue = new Queue();
        for (let val of arr) {
            stack.push(val);
            queue.push(val);
        }

        let flag = true;
        while (!stack.isEmpty() && !queue.isEmpty()) {
            if (stack.pop() !== queue.shift()) {
                flag = false;
                break;
            }
        }
        return flag;
    }
};