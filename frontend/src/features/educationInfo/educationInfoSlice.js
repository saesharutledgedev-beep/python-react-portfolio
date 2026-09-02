import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'

export const educationInfo = createAsyncThunk(
  'projects/fetchEducationInfo',
  async () => {
    const res = await fetch(`${API_BASE}/api/education-info`)
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  },
)

const educationInfo = createSlice({
  name: 'education-info',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(educationInfo.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(educationInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(educationInfo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default educationInfo.reducer
