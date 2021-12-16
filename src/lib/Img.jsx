import React from 'react'

import './Img.css'

export default class Img extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}
