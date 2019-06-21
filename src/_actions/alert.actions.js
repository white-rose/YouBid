export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: alertConstants.SUCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear(message) {
  return { type: alertConstants.CLEAR};
}

const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};
