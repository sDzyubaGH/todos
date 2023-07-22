import { prisma } from "@/db"
import { NextResponse } from "next/server"

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params
  const deletedTodo = await prisma.todo.delete({ where: { id: parseInt(id) } })
  return NextResponse.json(deletedTodo)
}