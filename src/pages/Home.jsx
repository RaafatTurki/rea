import React from 'react'
import Img from 'lib/Img'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Img src='/img/me.jpg'/>
                <Img src='/img/potato.png'/>
            </div>
        )
    }
}
