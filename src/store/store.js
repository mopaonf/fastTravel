

import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./slices/Themeslice";
import AuthSlice from "./slices/AuthSlice";
import { AuthenticationApi } from "./api/AuthenticationApi";
import { MainApi } from "./api/MainApi";

// import { ArticleApi } from "./api/ArticleApi";

export const store = configureStore({
	reducer: {
		ThemeSlice,
		AuthSlice,
		[AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
		[MainApi.reducerPath]: MainApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			AuthenticationApi.middleware,
			MainApi.middleware
		),
});

// No type inference is needed in JavaScript for RootState and AppDispatch