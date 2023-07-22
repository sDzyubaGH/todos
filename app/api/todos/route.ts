import { prisma } from "@/db";
import { redirect } from 'next/navigation'
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const todos = await prisma.todo.findMany()
  return NextResponse.json(todos)
}

type TodoBody = {
  title: string,
  description: string
}

export async function POST(request: Request) {
  const { title, description }: TodoBody = await request.json()
  if (!title) {
    return NextResponse.error()
  }
  const todo = await prisma.todo.create({ data: { title, description } })
  return NextResponse.json(todo)
}