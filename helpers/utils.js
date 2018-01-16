const { USER_STATUS } = require('./constants');

const {
  APPLIED,
  ACCEPTED,
  ENROLLED,
  ENROLLED_WAITLIST,
  CONFIRMED,
  DENIED,
  DEFERRED
} = USER_STATUS

const resolveNextStatus = (user) => {
  const {
    status
  } = user;

  switch(status) {
    case ACCEPTED: return ENROLLED;
  }
}

module.exports = {
  resolveNextStatus
}