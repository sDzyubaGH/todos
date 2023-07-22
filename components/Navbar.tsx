import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav>
      <Link href='new'>New todo</Link>
    </nav>
  )
}