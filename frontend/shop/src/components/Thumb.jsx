import React from 'react';
import styled from 'styled-components';

const Root = styled.span`
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding-bottom: 100%;
`

const Image = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Thumb = ({ title, alt, src, children, ...props }) => (
  <Root {...props}>
    <Image title={title} alt={alt} src={src} />
  </Root>
)

export default Thumb;
