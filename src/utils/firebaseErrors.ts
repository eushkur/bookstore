export type FirebaseErrorCode =
  | "auth/email-already-exists"
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseError {
  // eslint-disable-next-line max-len
  EMAIL_ALERADY_EXIST = "The provided email is already in use by an existing user. Each user must have a unique email.",
  EMAIL_ALREADY_IN_USE = "Email already in use. Each user must have a unique email.",
  WRONG_PASSWORD = "Invalid password entered. Please try again.",
  USER_NOT_FOUND = "User not found. Please, enter correct email.",
  UNKNOWN_ERROR = "Unknown error. Please, reload page.",
}

const getFirebaseMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-exists":
      return FirebaseError.EMAIL_ALERADY_EXIST;

    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;

    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;

    case "auth/user-not-found":
      return FirebaseError.USER_NOT_FOUND;

    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};

export { getFirebaseMessage };
