import React from 'react'

const Image = ({ src, css }) => {
    return (
        <img
            src={src}
            alt=""
            style={css}
        />
    )
}

export default Image