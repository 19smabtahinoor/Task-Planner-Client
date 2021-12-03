import { useSession } from "next-auth/react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import SideBar from '../components/SideBar';
import TaskArea from '../components/TaskArea';

export default function Home() {
  const [value, setValue] = React.useState(new Date());
  const [loading, setLoading] = React.useState(false)
  const { data: session } = useSession();
  const router = useRouter();


  return (
    <div className="">
      <Head>
        <title>Task Planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-1 lg:grid-cols-6 gap-10 bg-gray-100 h-screen p-8 box-border">
        <div className="col-span-2 ">
          <SideBar value={value} setValue={setValue} />
        </div>
        <div className="col-span-4">
          <TaskArea value={value} />
        </div>
      </main>
    </div>
  )
}
