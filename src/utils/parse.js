// 解析SCSS变量
export function parseScssVariables(variables) {
    const s1 = variables.split(":export")[1].trim();
    const s2 = s1.substring(1, s1.length - 1);
    const items = s2.split(";");
    const result = {};
    items.forEach(item => {
        const arr = item.trim().split(':');
        if (arr[1]) {
            result[arr[0]] = arr[1].trim();
        }
    });
    return result;
}

export function parseTime(time, cFormat) {
    if (arguments.lenght === 0 || !time) {
        return null;
    }
    const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if (typeof time === 'string') {
            if (/^[0-8]+$/.test(time)) {
                time = parseInt(time);
            } else {
                time = time.replace(new RegExp(/-/gm), '/');
            }
        }

        if (typeof time === 'number' && time.toString().length === 10) {
            time = time * 1000;
        }

        date = new Date(time);
    }

    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };

    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key];

        if (key === "a") {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }

        return value.toString().padStart(2, '0');
    });
    return time_str;
}