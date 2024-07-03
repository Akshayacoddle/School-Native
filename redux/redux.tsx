import { createSlice } from "@reduxjs/toolkit";
export const examSlice = createSlice({
  name: "values",
  initialState: {
    examData: {
      classIdResult: [],
      examTypeResult: [],
      academicYearResult: [],
      roomIdResult: [],
      subjectIdResult: [],
      teacherResult: [],
    },
  },
  reducers: {
    setexamData: (state, action) => {
      state.examData = action.payload;
    },
  },
});

export const { setexamData } = examSlice.actions;

export default examSlice.reducer;
