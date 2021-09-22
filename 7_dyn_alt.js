var alerts = {
  notice: "Notice msg goes..!",
  warn: "Warn msg goes..!",
  error: function (msg) {
    console.log(msg);
  },
};

module.exports = alerts;
