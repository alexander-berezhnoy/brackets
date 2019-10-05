module.exports = function check(str, bracketsConfig) {
    // your solution
    let open = {};
    let closed = {};
    let stack = [];

    bracketsConfig.forEach(brackets => {
        open[brackets[0]] = brackets[1];
        closed[brackets[1]] = true;
    });

    let wasOpened = false;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === open[char]) {
            if (!wasOpened) {
                stack.push(char);
                wasOpened = true;
            } else {
                wasOpened = false;
                if (open[stack.pop()] !== char) return false;
            }
        } else {
            if (open[char]) {
                stack.push(char);
            } else if (closed[char]) {
                if (open[stack.pop()] !== char) return false;
            }
        }
    }

    return stack.length === 0;
};
