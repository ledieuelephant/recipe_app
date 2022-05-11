import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
        <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          <div className='Test border mt-4'>
            Test
          </div>
          <div className='Test border mt-4'>
            Test
          </div>
          <div className='Test border '>
            Test
          </div>
        </div>
      </div>
    </div>
  )
}
