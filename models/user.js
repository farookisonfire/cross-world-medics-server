const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, unique: true },
  status: String,
  primarySubmitDate: String,
  firstName: String,
  lastName: String,
  email: { type: String, lowercase: true, unique: true },
  mobilePhoneNumber: String,
  dateOfBirth: String,
  gender: String,
  whatIsYourNationality: String,
  forWhichCountryDoYouHoldAValidPassport: String,
  haveYouEverBeenBannedbarredFromAUniversityCampusOrOtherPublicPlaceinstitution: String,
  pleaseProvideDocumentationOrWrittenExplanation: String,
  haveYouEverBeenConvictedOfAFelony: String,
  universityYouAttended: String,
  nameOfUniversity: String,
  whatIsYourMajorOrFieldOfStudywork: String,
  doYouAttendAHistoricallyBlackCollegeOrUniversityHbcu: String,
  selectYourPreferredProgramFocus: [String],
  howDidYouHearAboutCwm: String,
  pleaseSpecifyAnswer70812140: String,
  whyDoYouWantToJoinCwm: String,
  selectedProgramId: String
})

const User = mongoose.model('user', userSchema);

module.exports = User;
