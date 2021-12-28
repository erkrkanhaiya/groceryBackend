/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const { verifiedFunction: ensureAuth } = require('../verifyJwtToken');

const {
    registerUser,
    firebaseUser,
    verifyUser,
    loginUser,
    verifyUserRegistration,
    resendVerificationToken,
    sendPasswordResetToken,
    passwordReset,
    changePassword
} = require('../../controllers/mobileController/mobileauthControllers');

router.post('/register', registerUser);
router.post('/otpverify', verifyUser);
router.post('/firebaseUser', firebaseUser);




// router.post('/login', loginUser);

// router.post('/verify', verifyUserRegistration);

// router.post('/resend-verification-token', resendVerificationToken);

// // Password reset token
// router.post('/send-password-reset-token', sendPasswordResetToken);

// // Password reset
// router.post('/password-reset', passwordReset);

// // User change password
// router.post('/change-password', ensureAuth, changePassword);

module.exports = router;
