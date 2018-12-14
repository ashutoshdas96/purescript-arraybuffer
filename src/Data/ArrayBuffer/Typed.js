"use strict";


exports.polyFill = function polyFill () {
    var typedArrayTypes =
        [ Int8Array, Uint8Array, Uint8ClampedArray, Int16Array
        , Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
        ];

    for (var k in typedArrayTypes) {
        for (var v in Array.prototype) {
            if (Array.prototype.hasOwnProperty(v) && !typedArrayTypes[k].prototype.hasOwnProperty(v))
                typedArrayTypes[k].prototype[v] = Array.prototype[v];
        }
    }
};


// module Data.ArrayBuffer.Typed

exports.buffer = function buffer (v) {
    return v.buffer;
};

exports.byteOffset = function byteOffset (v) {
    return v.byteOffset;
};

exports.byteLength = function byteLength (v) {
    return v.byteLength;
};

exports.lengthImpl = function lemgthImpl (v) {
    return v.length;
};


// Typed Arrays

exports.newUint8ClampedArray = function newUint8ClampedArray (a,mb,mc) {
    return mc === null ? ( mb === null ? new Uint8ClampedArray(a)
                                       : new Uint8ClampedArray(a,mb)
                         )
                       : new Uint8ClampedArray(a,mb,mc);
};
exports.newUint32Array = function newUint32Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Uint32Array(a)
                                       : new Uint32Array(a,mb)
                         )
                       : new Uint32Array(a,mb,mc);
};
exports.newUint16Array = function newUint16Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Uint16Array(a)
                                       : new Uint16Array(a,mb)
                         )
                       : new Uint16Array(a,mb,mc);
};
exports.newUint8Array = function newUint8Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Uint8Array(a)
                                       : new Uint8Array(a,mb)
                         )
                       : new Uint8Array(a,mb,mc);
};
exports.newInt32Array = function newInt32Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Int32Array(a)
                                       : new Int32Array(a,mb)
                         )
                       : new Int32Array(a,mb,mc);
};
exports.newInt16Array = function newInt16Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Int16Array(a)
                                       : new Int16Array(a,mb)
                         )
                       : new Int16Array(a,mb,mc);
};
exports.newInt8Array = function newInt8Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Int8Array(a)
                                       : new Int8Array(a,mb)
                         )
                       : new Int8Array(a,mb,mc);
};
exports.newFloat32Array = function newFloat32Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Float32Array(a)
                                       : new Float32Array(a,mb)
                         )
                       : new Float32Array(a,mb,mc);
};
exports.newFloat64Array = function newFloat64Array (a,mb,mc) {
    return mc === null ? ( mb === null ? new Float64Array(a)
                                       : new Float64Array(a,mb)
                         )
                       : new Float64Array(a,mb,mc);
};


// ------

exports.everyImpl = function everyImpl (a,p) {
    return a.every(p);
};
exports.someImpl = function someImpl (a,p) {
    return a.some(p);
};


exports.fillImpl = function fillImpl (a,x,ms,me) {
    return me === null ? (ms === null ? a.fill(x) : a.fill(x,ms)) : a.fill(x,ms,me);
};


exports.mapImpl = function mapImpl (a,f) {
    return a.map(f);
};

exports.forEachImpl = function forEachImpl (a,f) {
    a.forEach(f);
};

exports.filterImpl = function filterImpl (a,p) {
    return a.filter(p);
};

exports.includesImpl = function includesImpl (a,x,mo) {
    return mo === null ? a.includes(x) : a.includes(x,mo);
};

exports.reduceImpl = function reduceImpl (a,f,i) {
    return a.reduce(f,i);
};
exports.reduce1Impl = function reduce1Impl (a,f) {
    return a.reduce(f);
};
exports.reduceRightImpl = function reduceRightImpl (a,f,i) {
    return a.reduceRight(f,i);
};
exports.reduceRight1Impl = function reduceRight1Impl (a,f) {
    return a.reduceRight(f);
};

exports.findImpl = function findImpl (a,f) {
    var x = a.find(f);
    return (x === undefined) ? null : x;
};
exports.findIndexImpl = function findIndexImpl (a,f) {
    var x = a.findIndex(f);
    return (x === -1) ? null : x;
};
exports.indexOfImpl = function indexOfImpl (a,x,mo) {
    var r = mo === null ? a.indexOf(x) : a.indexOf(x,mo);
    return r === -1 ? null : r;
};
exports.lastIndexOfImpl = function lastIndexOfImpl (a,x,mo) {
    var r = mo === null ? a.lastIndexOf(x) : a.lastIndexOf(x,mo);
    return r === -1 ? null : r;
};



exports.copyWithinImpl = function copyWithinImpl (a,t,s,me) {
    if (me === null) {
        a.copyWithin(t,s);
    } else {
        a.copyWithin(t,s,me);
    }
};


exports.reverseImpl = function reverseImpl (a) {
    a.reverse();
};


exports.setImpl = function setImpl (a, off, b) {
    if (off === null) {
        a.set(b);
    } else {
        a.set(b,off);
    }
};


exports.sliceImpl = function sliceImpl (a,ms,me) {
    return me === null ? (ms === null ? a.slice() : a.slice(ms)) : a.slice(ms,me);
};


exports.sortImpl = function sortImpl (a) {
    a.sort();
};


exports.subArrayImpl = function subArrayImpl (a,ms,me) {
    return me === null ? (ms === null ? a.subarray() : a.subarray(ms)) : a.subarray(ms,me);
};


exports.toString = function toString (a) {
    return a.toString();
};

exports.joinImpl = function joinImpl (a,s) {
    return a.join(s);
};

exports.unsafeAtImpl = function(a, i) {
    return a[i];
}

exports.hasIndexImpl = function(a, i) {
    return i in a;
}

exports.toArrayImpl = function(a) {
    var l = a.length;
    var ret = new Array(l);
    for (var i = 0; i < l; i++)
        ret[i] = a[i];
    return ret;
}
