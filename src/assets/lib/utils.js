import _ from 'lodash'
let utils = {}

let vcity = {
    11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
    21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
    33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
    42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
    51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
    63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
};

//15位转18位身份证号
let changeFivteenToEighteen = (card) => {
    if(card.length == 15)
    {
        let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let cardTemp = 0, i
        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6)
        for(i = 0; i < 17; i ++)
        {
            cardTemp += card.substr(i, 1) * arrInt[i];
        }
        card += arrCh[cardTemp % 11]
        return card
    }
    return card
};

//校验位的检测
let checkParity = (card) => {
    //15位转18位
    card = changeFivteenToEighteen(card)
    let len = card.length
    if(len == 18)
    {
        let arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        let arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        let cardTemp = 0
        for(let i = 0; i < 17; i ++)
        {
            cardTemp += card.substr(i, 1) * arrInt[i]
        }
        let valnum = arrCh[cardTemp % 11]
        let target = card.substr(17, 1)
        //alert(target)
        if (valnum == 'X' && ~['x', 'X'].indexOf(target) || valnum == target)
        {
            return true
        }
    }
    return false
}

//校验日期
let verifyBirthday = (year, month, day, birthday) => {
    let now = new Date()
    let now_year = now.getFullYear()
    //年月日是否合理
    if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)
    {
        //判断年份的范围（3岁到100岁之间)
        let time = now_year - year
        if(time >= 3 && time <= 100)
        {
            return true
        }
    }
    return false
};

/**
 * check integer
 * @params{String} value
 * @return {boolean}
 */
utils.checkInteger = (value) => {
    return /^[1-9]+\d*$/.test(value)
};
utils.key=()=>{
    const host=window.location.hostname;
   if (host=='mobile.bao.cn'){
       return 'base64:6Sz59hJHqfJmWC7kHIY+UjOq2bOVQDqQHTVpGar6G6L='
   }else {
       return 'base64:6Sz59hJHqfJmWC7kHIY+UjOq2bOVQDqQHTVpGar6G6L='
   }
}
//取身份证前两位,校验省份
let checkProvince = (card) => {
    return vcity[card.substr(0,2)] ? true : false
};

//检查生日是否正确
let checkBirthday = (card) => {
    let len = card.length;
    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
    if(len == '15')
    {
        let re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/
        let [ , , year, month, day] = card.match(re_fifteen)
        let birthday = new Date('19' + year + '/' + month + '/' + day)
        return verifyBirthday('19' + year, month, day, birthday)
    }
    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
    if(len == '18')
    {
        let re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/;
        let [ , , year, month, day] = card.match(re_eighteen)
        let birthday = new Date(year + '/' + month + '/' + day)
        return verifyBirthday(year, month, day, birthday)
    }
    return false
}

//检查号码是否符合规范，包括长度，类型
let isCardNo = (card) => {
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(card)
}

/*判断用户操作系统*/
utils.checkPlantForm = () => {
    window.onland = () => {
        let u = navigator.userAgent
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if(isiOS){
            return ('ios')
        }else{
            return ('android')
        }
    }
    return(window.onland())
}

/**
 * check card
 * @params{String} value
 * @return {boolean}
 */
utils.checkCard = (card) => {
    //是否为空
    if(!card)
        return false
    //校验长度，类型
    if(!isCardNo(card))
        return false
    //检查省份
    if(!checkProvince(card))
        return false
    //校验生日
    if(!checkBirthday(card))
        return false
    //检验位的检测
    if(!checkParity(card))
        return false
    return true
};

/**
 * check legal String
 * @params{String} value
 * @return {boolean}
 */
utils.isIllegal = (value) => {
    return /[\^\$\.\*\+\?=!:\|\\\/\(\)\[\]\{\}]+/.test(value)
}

/**
 * 检查中文，数字，字母组成
 * @params{String} value
 * @return {boolean}
 */
utils.checkName = (value) => {
    if (!value) return false
    let _value = String(value)

    for (let i = 0, l = _value.length; i < l; i++) {
        if (!/[^\u0000-\u00FF]|[0-9a-zA-Z_@]/.test(_value.charAt(i))) {
            return false
        }
    }

    return true
}

/**
 * check mobile
 * @params{String} value
 * @return {boolean}
 */
utils.checkMobile = (value) => {
    return /^1\d{10}$/.test(value)
}

/**
 * check password 检测密码 6-16位 支持非中文外所有字符
 * @params{String} value
 * @return {boolean}
 */
utils.checkPassword = (value) => {
    return !/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(value) && /^\S{6,16}$/.test(value) ? true : false
}

/**
 * check number
 * @params{String} value
 * @return {boolean}
 */
utils.checkNumber = (value) => {
    return /^\d*$/.test(value) || /^\d+\.\d{0,2}$/.test(value)
}

utils.transformToMoney = function(number) {
    if (!this.checkNumber(number))
        return false;
    return Number(number) + 0.001
}

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time.
 * @param fn
 * @param wait
 */
utils.throttle = (func, wait) => {
    let context, args, timeout, result, previous = 0
    let later = function () {
        previous = new Date()
        timeout = null
        result = func.apply(context, args)
    }

    return function() {
        let now = new Date()
        let remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0) {
            clearTimeout(timeout)
            timeout = null
            previous = now
            result = func.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

/**
 * get type
 */
utils.getType = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}

utils.objToStr = (obj) => {
    var index = 0
    var str = ''
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            str += `${index > 0 ? '&' : ''}${key}=${obj[key]}`
            index++
        }
    }
    return str
}

/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
utils.accAdd = (arg1, arg2) => {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

/**
 ** 减法函数，用来得到精确的减法结果
 ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 ** 调用：accSub(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
utils.accSub = (arg1, arg2) => {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

// 隐藏start-end位
utils.replaceTextToSymbol = (text, start, end) => {
    if (!text) return text
    return text.slice(0, start-1) + new Array(end - start + 2).join('*') + text.slice(end)
}

// 金额格式处理 小数点后两位
utils.moneyFormat = (money) => {
    let moneyArray = String(money).split('.')
    // 如果是整数类型 小数点后面加.00
    if (moneyArray.length < 2) {
        return moneyArray[0] + '.00'
    }

    return moneyArray[0] + '.' + (moneyArray[1] + '00').substring(0, 2)
}

// 四舍五入 n位小数点
utils.toFixed = (number, n) => {
    if (!~String(number).indexOf('.'))
        return number
    return ((Number(number) * Math.pow(10, n || 2)).toFixed(0) / 100).toFixed(2)
}

// 为金额补上n位小数, 默认为2(即xx.00)
export const padMoney = (num, precision = 2) => {
    if (num === undefined) return ''
    if (isNaN(+num)) return num
    num = String(num)
    let result = ''
    if (/\./.test(num)) {
        const decimal = num.split('.')[1]
        if(decimal.length > precision) {
            result = _.round(+num, precision)
        }else if (decimal.length === precision) {
            result = num
        }else {
            result = num + Array(precision - decimal.length + 1).join('0')
        }
    }else {
        result = num + '.' + Array(precision + 1).join('0')
    }
    if (+result === _.round(+num, precision)) return result
    else throw new Error(`function utils.padMoney error, input is ${num}, output is ${result}`)
}

utils.padMoney = padMoney

// 响应头获取cookies转化为object格式
utils.filterCookie = (cookies) => {
    let result = {},
        arr = []

    if (cookies[cookies.length-1] !== ',') {
        cookies += ','
    }

    const ba_loc = cookies.indexOf('bao-auth'),
        xt_loc = cookies.indexOf('XSRF-TOKEN'),
        ls_loc = cookies.indexOf('laravel_session');

    if (~ba_loc) { arr.push({name: 'bao-auth', index: ba_loc}) }
    if (~xt_loc) { arr.push({name: 'XSRF-TOKEN', index: xt_loc}) }
    if (~ls_loc) { arr.push({name: 'laravel_session', index: ls_loc}) }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].index > arr[j].index) {
                arr.splice(i, 0, arr.splice(j, 1)[0]);
            }
        }
    }

    for (let i = 0, l = arr.length; i < l; i++) {
        if (i + 2 > l) {
            result[arr[i].name] = cookies.slice(arr[i].index)
        } else {
            result[arr[i].name] = cookies.slice(arr[i].index, arr[i+1].index)
        }
    }

    return result
}

utils.PubSub = {
    handlers: {},
    // 订阅事件
    on: function(eventType,handler){
        var self = this;
        if(!(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
        return this;
    },
    // 触发事件(发布事件)
    emit: function(eventType){
        var self = this;
        var handlerArgs = Array.prototype.slice.call(arguments,1);
        for(var i = 0; i < self.handlers[eventType].length; i++) {
            self.handlers[eventType][i].apply(self,handlerArgs);
        }
        return self;
    }
}

utils.paramsMiddler = (value) => {
    return value.replace('&', '%26')
}

utils.inArray = (value, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true
        }
    }

    return false
}

utils.dimension = () => {
    let winWidth, winHeight
    //获取窗口宽度
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    //获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;

    return {
        width: winWidth,
        height: winHeight
    }
};
/**
 * md5 加密
 * @param string
 * @returns {string}
 */
utils.md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }

    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
    return temp.toLowerCase();
}
/**
 ** 交易密码输错次数
 **/
utils.getPassErrorNums = (username, success, fail) => {
  if (!window.sessionStorage) return false
  const passErrorDate = sessionStorage.getItem('passErrorDate')
  if (!passErrorDate) {
    success && success()
    return false
  }

  const _passErrorDate = JSON.parse(passErrorDate)
  if (!_passErrorDate.username) {
    success && success()
    return false
  }

  const gapSeconds = (new Date().getTime() - _passErrorDate.username) / 1000
  if (gapSeconds >= 0 && gapSeconds <= 600) {
    fail && fail(Math.ceil((600 - gapSeconds)/60))
  } else {
    success && success()
  }
}

utils.savePassErrorDate = (username) => {
  if (!window.sessionStorage) return false
  const passErrorDate = sessionStorage.getItem('passErrorDate')
  let _passErrorDate = {}
  if (passErrorDate) {
    _passErrorDate = JSON.parse(passErrorDate)
  }

  _passErrorDate.username = new Date().getTime()
  window.sessionStorage.setItem('passErrorDate', JSON.stringify(_passErrorDate))
}

utils.combineUrl = (url, params) => {
  let paramsArr = []
  for (var key in params) {
    paramsArr.push( key + '=' + params[key] )
  }

  return url + '?' + paramsArr.join('&')
}

utils.getParams = () => {
  let result = {}
  const paramArr = location.search.slice(1).split('&')
  for (var i = 0 ; i < paramArr.length; i++) {
    let paramItem = paramArr[i].split('=')
    if (paramItem[0]) {
      result[paramItem[0]] = paramItem[1]
    }
  }

  return result
}


utils.isPlainObject = (obj) => {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop))
      return false
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
/**
  格式化时间
 */
utils.formatDate=function(fmt,date){
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
/**
  根据action提供的key（当前是action.type）和params生成listdata.{uniqueKey}
*/
utils.composeKeyWithParams = function (key, params) {
  const suffix = params.reduce((accumulate, value) => accumulate + `_${value}`, '')
  return key + suffix
}
export default utils
