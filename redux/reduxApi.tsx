import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUserInfo = createAsyncThunk('fetchUserInfo', async () => {
  const res = await fetch('http://localhost:5001/exam/classid');
  return res.json();
});

export const fetchQuestionInfo = createAsyncThunk(
  'fetchQuestionInfo',
  async () => {
    const res = await fetch('http://localhost:5001/exam/examname');
    return res.json();
  },
);

const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    data: {},
  },
  extraReducers: builder => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {},
});

const questionInfo = createSlice({
  name: 'questionInfo',
  initialState: {
    data: {},
  },
  extraReducers: builder => {
    builder.addCase(fetchQuestionInfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
  reducers: {},
});

export {userInfo, questionInfo};
