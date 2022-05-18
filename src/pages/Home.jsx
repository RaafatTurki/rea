import React from 'react'
import Img from 'lib/Img'
import { useStore } from 'react-stores'
import store from '../plugins/store'

import './Home.css'


export default function Home() {
  const storeData = useStore(store)

  function clicked() {
    store.setState({
      counter: storeData.counter + 1,
    })
  }

  return (
    <div>
      <h1>Home Page</h1>

      <h2>some icons</h2>
      <div className='i-logos-svelte-icon'/>
      <div className='i-logos-facebook'/>
      <div className='i-logos-youtube-icon'/>
      <div className='i-logos-google-icon'/>
      <div className='i-carbon-home'/>
      <div className='i-carbon-favorite'/>

      <h2>some images</h2>
      <Img src='/img/me.jpg'/>
      <Img src='/img/potato.png'/>

      <h2>data in the store</h2>
      <h1>{storeData.counter}</h1>
      <input type="button" value='click me' onClick={clicked}/>
    </div>
  )
}
