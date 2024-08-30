import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
}

interface TasksState {
  tasks: Task[];
  searchQuery: string;
  filteredTasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
  searchQuery: "",
  filteredTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
      state.filteredTasks = action.payload; // Initialize filteredTasks
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setTasks, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;
