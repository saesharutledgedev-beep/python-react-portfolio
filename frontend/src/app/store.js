import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/projectsSlice'
import personalInfoReducer from '../features/personalInfo/personalInfoSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    personalInfo: personalInfoReducer,
  },
})
