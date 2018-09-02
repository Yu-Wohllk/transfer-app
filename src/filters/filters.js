import Accounting from "accounting-js"
import Util from "../utils/util";
import Vue from 'vue'

Vue.filter('currency', function (value) {
    return !isNaN(value) ? Accounting.formatMoney(value, { precision : 0, thousand : '.' }) : 0
});

Vue.filter('rut', function (value) {
    return Util.formatRut(value);
});