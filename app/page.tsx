import Header from '../components/Header'
import WorkArea from "../components/WorkArea"

async function getTasks() {
  const res = await fetch("/api/collections/todoList/records");
  const data = res.json();
}

export default function Home() {
  return (
    <main className='w-full h-full bg-primary-color'>
      <Header/>
      <WorkArea/>
    </main>
  )
}
