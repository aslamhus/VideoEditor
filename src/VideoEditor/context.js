/**
 * Create context object with a getter and setter
 */
const context = {
  setContext: function (context) {
    this.context = context;
  },
  getContext: function () {
    return this.context;
  },
};

export default context;
