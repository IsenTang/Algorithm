module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        'ecmaVersion': 8
    },
    "rules": {
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "should|expect"
            }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "no-console": 0,
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "arrow-body-style": 2,
        "arrow-parens": [2, "always"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "no-confusing-arrow": 0
    }
};