'use client'

import Link from 'next/link'
import React from 'react'
import Todo from '@/types/todo'

type Props = {
  todo: Todo
}

// type Todo = {
//   id: number
//   title: string,
// }

const deleteTodo = async () => {

}

export default function Todo({ todo }: Props) {

  const deleteTodoHandler = async (e) => {
    e.preventDefault()
    if (!confirm('Delete?')) return

    await fetch(`/api/todos/${todo.id}`, {
      method: "DELETE"
    })
  }

  return (
    <Link href={`/${todo.id}`} className='p-4 flex justify-between border rounded border-neutral-400'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <div>
            {todo.id}.
          </div>
          <div>
            {todo.title}
          </div>
        </div>
        <div>{todo.description}</div>
      </div>
      <div className='flex align-middle'>
        <button onClick={deleteTodoHandler} className='text-red-300'>Delete</button>
      </div>
    </Link>
  )
}