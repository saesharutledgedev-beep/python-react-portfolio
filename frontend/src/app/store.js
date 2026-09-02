import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/projectsSlice'
import personalInfoReducer from '../features/personalInfo/personalInfoSlice'
import experienceInfoReducer from '../features/experienceInfo/experienceInfoSlice'
import educationInfoReducer from '../features/educationInfo/educationInfoSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    personalInfo: personalInfoReducer,
    experienceInfo: experienceInfoReducer,
    educationInfo: educationInfoReducer,
  },
})
