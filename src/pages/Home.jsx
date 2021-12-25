import React from 'react'
import Img from 'lib/Img'

import './Home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <div class='i-logos-svelte-icon'/>
                <div class='i-logos-facebook'/>
                <div class='i-logos-youtube-icon'/>
                <div class='i-logos-google-icon'/>

                <div class='i-carbon-home'/>
                <div class='i-carbon-favorite'/>

                <Img src='/img/me.jpg'/>
                <Img src='/img/potato.png'/>
            </div>
        )
    }
}
