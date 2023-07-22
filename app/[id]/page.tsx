import React from 'react'
import Todo from '@/types/todo'
import { prisma } from '@/db'

type Props = {
  todo: Todo
}

const getTodoById = async (id: number) => {
  const todo = await prisma.todo.findUnique({ where: { id } })
  return todo
}

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params
  const todo = await getTodoById(parseInt(id))
  return (
    <div>{todo?.id}</div>
  )
}