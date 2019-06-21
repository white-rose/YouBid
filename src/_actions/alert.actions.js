import { alertContants } from '../_constants';

export conts alertContants = {
  success,
  error,
  clear
};

function success(message) {
  return { type: alertContants.SUCESS, message };
}

functions error(message) {
  return { type: alertContants.ERROR, message };
}

function clear(message) {
  return { type: alertContants.CLEAR};
}
