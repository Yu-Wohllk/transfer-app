export default {
  removeZeroToLeft(word) {
    if (word && word.replace) {
      return word.trim().replace(/^0+/, '');
    }
    return word;
  },
  formatNumber(value) {
    var num = value.toString().replace(/\./g, "");
    if (!isNaN(num)) {
      num = num.toString().split("").reverse().join("").replace(
      /(?=\d*\.?)(\d{3})/g, "$1.");
      num = num.split("").reverse().join("").replace(/^[\.]/, "");
      return num;
    } else {
      num = num.replace(/[^\d\.]*/g, "");
      return num;
    }
  },
  replaceAll(word) {
    var newWord = '';
    var splitWord = word.split('.');
    for (var index = 0; index < splitWord.length; index++) {
      newWord += splitWord[index];
      
    }
    newWord = newWord.replace('$', '').trim();
    
    return newWord;
  },
  formatRut(rut) {
    rut = this.removeZeroToLeft(rut);
    if (rut.trim().length > 1) {
      if (rut.trim().match(/^[0-9 Kk\- .]+$/)) {
        rut = this.replaceAll(rut, '.');
        rut = rut.replace('-', '');
        var rutSin = rut.substring(0, rut.length - 1);
        rutSin = this.formatNumber(rutSin);
        var dv = rut.charAt(rut.length - 1).toUpperCase();
        rut = rutSin + '-' + dv;
      }
    }
    return rut;
  }
}