import React from 'react'
import Todo from './Todo'

type Props = {
  todos: any[]
}

export default function Todos({ todos }: Props) {
  return (
    <>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </>
  )
}