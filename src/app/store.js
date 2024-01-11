import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { promotionsReducer } from '../features/promotions/PromotionsSlice';
import { commentsReducer} from '../features/comments/commentsSlice'
import { partnersReducer } from '../features/partners/partnersSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefautltMiddleware) => getDefautltMiddleware().concat([logger])
});
