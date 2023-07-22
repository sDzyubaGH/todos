import { create } from 'zustand'

type UseTodos = {
  todos: any[],
  loading: boolean,
  fetchTodos: () => Promise<void>
}

export const useTodosStore = create<UseTodos>()(set => ({
  todos: [],
  loading: false,
  fetchTodos: async () => {
    set({ loading: true })
    const response = await fetch('/api/todos')
    const data = await response.json()
    set({ todos: data, loading: false })
  }
}))


// ((set) => ({
//   todos: [],
//   addTodo: (newTodo) => set((state) => ({
//     todos: [
//       ...state.todos, newTodo
//     ]
//   })),
//   fetchTodos: async () => {
//     const res = await fetch('/api/todos')
//     const data = await res.json()
//     set({ todos: data })
//   }
// }))
