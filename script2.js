var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var obj1 = { a: 1, b: "hello" };
    var obj2 = { b: "world", c: true };
    var obj3 = { c: false, d: [1, 2, 3, 4] };
    function combinedObjects(obj1) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            obj1 = __assign(__assign({}, obj1), arg);
        }
        Object.keys(obj1).forEach(function (key) {
            if (obj1[key] === null) {
                delete obj1[key];
            }
        });
        return obj1;
    }
    var obj4 = combinedObjects(obj1, obj2, obj3);
    console.log(obj4);
}
