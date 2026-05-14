var decodeString = function(s) {
    let i = 0;

    let decode = () => {
        let res = "";
        let num = 0;

        while (i < s.length) {
            let char = s[i];

            if (char >= '0' && char <= '9') {
                num = num * 10 + parseInt(char);
                i++;
            } 
            else if (char === "[") {
                i++;
                let str = decode();
                res += str.repeat(num);
                num = 0;
            } 
            else if (char === "]") {
                i++;
                return res;
            } 
            else {
                res += char;
                i++;
            }
        }

        return res;
    };

    return decode();
};