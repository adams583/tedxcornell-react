import React from 'react'
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

function overlay({ title, body, img, imageStyle, textStyle, extra }) {
  return (
    <div style={{
      height: '30em', backgroundImage: `url(${img})`, backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }} className="d-flex align-items-center">
      <Container className="d-flex align-items-center text-white">
        <Stack gap={2} className="my-auto mx-auto text-center">
          <h1 style={{ fontSize: '5em' }}>{title}</h1>
          <h3 style={{ fontSize: '1.5em' }}>{body}</h3>
        </Stack>
      </Container>
    </div>
  )
}

export default React.memo(overlay)