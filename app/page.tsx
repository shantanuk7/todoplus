import Header from '../components/Header'
import WorkArea from "../components/WorkArea"

async function getTasks() {
  const res = await fetch("/api/collections/todoList/records");
  const data = res.json();
}

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col bg-primary-color'>
      <Header/>
      <WorkArea/>
    </main>
  )
}
