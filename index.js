"use strict"

/**
 * Validates BSN number.
 * @param {Number} bsn Dutch citizin number (BSN)
 * @return {Boolean} Indication if the BSN is valid or not.
 */
exports.validate = function (bsn) {
    var BSNlength = bsn.toString().length;
    var bsn = Number(bsn)
    if (isNaN(bsn) || (BSNlength !== 8 && BSNlength !== 9)) {
        return false;
    }
    var bsnString = ("0" + bsn).slice(-9).toString();
    var bsnStringLength = bsnString.length;
    var i = 0, sum = 0, num = 9;
    for (i; i < bsnStringLength; i++) {
        sum += parseInt(bsnString[i]) * num;
        num--;
    }
    if (sum % 11) {
        return false;
    }
    return true;
}