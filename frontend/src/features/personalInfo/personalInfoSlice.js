import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'

export const fetchInfo = createAsyncThunk(
  'projects/fetchPersonalInfo',
  async () => {
    const res = await fetch(`${API_BASE}/api/personal-info`)
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  },
)

const personalInfo = createSlice({
  name: 'personal-info',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default personalInfo.reducer
