import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { FirebaseError, FirebaseErrorCode, getFirebaseMessage } from "utils";

interface UserState {
  isAuth: boolean;
  email: string;
  isPendingAuth: boolean;
  error: null | FirebaseError;
  creationTime: string;
  lastSignInTime: string;
  theme: "light" | "dark";
  emailForReset: string;
}

const initialState: UserState = {
  isAuth: false,
  email: "",
  isPendingAuth: false,
  error: null,
  creationTime: "",
  lastSignInTime: "",
  theme: "light",
  emailForReset: "",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string; lastSignInTime: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;
    const lastSignInTime = userCredential.user.metadata.lastSignInTime as string;

    return { userEmail, creationTime, lastSignInTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { userEmail: string; creationTime: string; lastSignInTime: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const creationTime = userCredential.user.metadata.creationTime as string;
    const lastSignInTime = userCredential.user.metadata.lastSignInTime as string;

    return { userEmail, creationTime, lastSignInTime };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignOut = createAsyncThunk<void, undefined, { rejectValue: FirebaseError }>(
  "user/fetchSignOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  },
);

export const fetchResetPassword = createAsyncThunk<
  string,
  { email: string },
  { rejectValue: FirebaseError }
>("user/fetchResetPassword", async ({ email }, { rejectWithValue }) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return email;
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchUpdateEmail = createAsyncThunk<void, string, { rejectValue: FirebaseError }>(
  "user/fetchUpdateEmail",
  async (newEmail, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      user && (await updateEmail(user, newEmail));
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };
      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  },
);

export const fetchUpdateEmailAndPassword = createAsyncThunk<
  void,
  { newEmail: string; newPassword: string },
  { rejectValue: FirebaseError }
>("user/fetchUpdateEmailAndPassword", async ({ newEmail, newPassword }, { rejectWithValue }) => {
  try {
    const user = auth.currentUser;
    user && (await updateEmail(user, newEmail));
    user && (await updatePassword(user, newPassword));
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme(state, { payload }: PayloadAction<"light" | "dark">) {
      state.theme = payload;
    },

    resetError(state) {
      state.error = null;
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.lastSignInTime = payload.lastSignInTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.lastSignInTime = payload.lastSignInTime;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignOut.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = true;
      }
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.emailForReset = payload;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchUpdateEmailAndPassword.pending, (state) => {
      state.isPendingAuth = true;
      state.error = null;
    });
    builder.addCase(fetchUpdateEmailAndPassword.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
    });
    builder.addCase(fetchUpdateEmailAndPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;

export const { changeTheme, resetError } = userSlice.actions;
