import { Tabs } from '@/components/ui/tabs'
import React from 'react'

const tabs = [
  {
    title: "Webové stránka",
    value: "web",
    content: (
      <div className="bg-blue-400 w-full h- min-h-screen" />
    )
  },
  {
    title: "Plakáty",
    value: "plakat",
    content: (
      <div className="bg-red-400 w-full h- min-h-screen" />
    )
  },
  {
    title: "Loga",
    value: "logo",
    content: (
      <div className="bg-green-400 w-full h- min-h-screen" />
    )
  }
]

export default function Designs() {
  return (
    <section className="w-full min-h-screen flex py-16 flex-col">
      <h2 className="sm:text-9xl text-6xl font-bebas font-medium title-font pb-4 text-main-text-300">
        <span className="font-dancing font-extrabold text-main-text-100">moje</span> Designy
      </h2>
      <Tabs tabs={tabs} />
    </section>
  )
}

