'use strict';

module.exports = function (friendName) {
    if (friendName.trim() !== "") {
        return `Hello, ${friendName}!`;
    }
    return "Hello, World!";
};
