import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'

export const experienceInfo = createAsyncThunk(
  'projects/fetchPersonalInfo',
  async () => {
    const res = await fetch(`${API_BASE}/api/experience-info`)
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  },
)

const experienceInfo = createSlice({
  name: 'experience-info',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(experienceInfo.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(experienceInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(experienceInfo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default personalInfo.reducer
