import React from 'react'
import Image from 'react-bootstrap/Image'

function overlay({ title, body, img, imageStyle, textStyle, extra}) {
  imageStyle['display'] = 'flex'
  return (
    <div style={imageStyle} >
      <Image fluid src={img} style={{ width: '100%' }}>
      </Image>
      <div style={textStyle}>
        <h1 style={{ fontSize:  '60px' }}>{title}</h1>
        <h3 style={{ fontSize: '40px' }}>{body}</h3>
      </div>
    </div>
  )
}

export default React.memo(overlay)