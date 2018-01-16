'use strict';

module.exports = {
    //kmp 单个检索
    subject1: (str, x) => {
        const kmp = (str, x) => {
            let nextStr = '';
            let nextIndex = 0;
            let result = {};
            if (str.length < x.length) {
                result.state = false;
                return result;
            }
            for (let i = 0; i < str.length; i++) {
                if (i <= x.length - 1) {
                    if (str.charAt(i) !== x.charAt(i)) {
                        nextStr = str.substr(0, i + 1);
                        nextIndex = i + 1;
                        break;
                    } else {
                        result.state = true;
                        return result;
                    }
                } else {
                    result.state = true;
                    return result;
                }
            }
            let nextStrResult = next(nextStr);
            let newStr = nextStrResult + str.substr(nextIndex, str.length);

            kmp(newStr, x);
        };

        const next = (str) => {
            let nextStr = '';
            for (let i = 0; i < str.length; i++) {
                if (str.substr(0, i + 1) === str.substr(str.length - i - 1, str.length)) {
                    nextStr = str.substr(0, i + 1);
                    break;
                }
            }
            return nextStr;
        };
        return kmp(str, x);
    },




};