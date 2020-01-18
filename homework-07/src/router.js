const controller = require('./controller');

const authUser = require('./authUser');

module.exports = (req, res) => {
  if (!authUser(req.headers.authorization)) {
    controller.isNotAuthUser(res);
  } else {
    const { url, method, queryParams } = req;
    switch (url.pathname) {
      case '/':
        res.write('This is home page');
        res.end();
        break;

      case '/limit':
        if (method !== 'POST') {
          controller.getInternalError(res);
          break;
        }
        controller.postLimit(req, res);
        break;

      case '/metrics':
        if (method !== 'GET') {
          controller.getInternalError(res);
          break;
        }

        if (!queryParams.filter) controller.getMetricsAll(req, res);
        else if (queryParams.filter) {
          if (queryParams.filter === 'total') controller.getMetricsTotal(req, res);
          else if (queryParams.filter === 'free') controller.getMetricsFree(req, res);
          else if (queryParams.filter === 'allocated') controller.getMetricsAllocated(req, res);
          else controller.getInvalidFilter(req, res);
        } else controller.getInternalError(res);
        break;

      default:
        controller.getInternalError(res);
        break;
    }
  }
};
