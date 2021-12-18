import React from 'react'

import './Img.css'

export default class Img extends React.Component {

    state = {
        is_loaded: false
    }

    handle_load = () => {
        this.setState({ is_loaded: true })
    }

    render() {
        return (
            <div className='image_container'>
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    className={this.state.is_loaded ? "is_loaded" : null}
                    onLoad={this.handle_load}
                />
            </div>
        )
    }
}
