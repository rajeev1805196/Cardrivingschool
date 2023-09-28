import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import "../public/assets/css/style.css"
import Dashboard from './dashboard'
import Listing from './listing'
export default function Pages() {
  return (
    <main className="main-wrapper">
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
      <Dashboard/>
      <Listing />
    </main>
  )
}
