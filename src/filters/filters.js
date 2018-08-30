import Accounting from "accounting-js"
import Util from "../utils/util";
import Vue from 'vue'

Vue.filter('currency', function (value) {
    return Accounting.formatMoney(value, { precision : 0, thousand : '.' });
});

Vue.filter('rut', function (value) {
    return Util.formatRut(value);
});