import { prisma } from "@/db";
import Navbar from "../components/Navbar";
import { NextResponse } from "next/server";
import { PrismaPromise } from "@prisma/client";
import Todos from "@/components/Todos";
import { useTodosStore } from "@/store/todos";
import { shallow } from "zustand/shallow";

async function getTodos() {
  const todos: any[] = await prisma.todo.findMany()
  return todos
}

export default async function Home() {
  const todos = await getTodos()
  return (
    <div className="flex flex-col gap-4">
      <Todos todos={todos} />
    </div>
  )
}
