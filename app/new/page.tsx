"use client"

import MyInput from '@/components/MyInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function NewTodo({ }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const createTodoHandler = () => {
    fetch('/api/todos', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    })
      .catch(err => console.log(err))
      .finally(() => router.push('/'))
  }

  return (
    <div>
      <MyInput id="post-title" label='Title' value={title} setValue={setTitle} />
      <MyInput id="post-description" label='Description' value={description} setValue={setDescription} />
      <button onClick={createTodoHandler}>Create</button>
    </div>
  )
}