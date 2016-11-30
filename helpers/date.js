Date.prototype.onlyTime = function () {
  return this.toTimeString().split(" ")[0];
};

Date.prototype.toFormat = function (format) {
  format = format.replace(/H/, this.getHours());
  format = format.replace(/m/, this.getMinutes());
  format = format.replace(/s/, this.getSeconds());

  return format;
};

module.exports = Date;
