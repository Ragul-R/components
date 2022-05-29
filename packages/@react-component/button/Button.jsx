import React from 'react';

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/core';

import classNames from 'classnames';

const styles = css`
  @font-face {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://use.typekit.net/af/180254/00000000000000000001522c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/180254/00000000000000000001522c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/180254/00000000000000000001522c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("opentype")
  }
  font-family: 'Lato', sans-serif;
  height: 40px;
  color: #fff;
  border-radius: 24px;
  background-color: transparent;
  border: none;
  outline: 0;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  outline: 0;
  position: relative;
  transition: all .3s;
  cursor: pointer;

  &.g-btn-primary {
    background-color: #69f;
    color: #fff;
  }

  &.g-btn-secondary {
    background: #fff;
    border: 1px solid #dbdbdb;
    color: #333;
  }

  &.g-btn-ghost {
    color: #333;
  }

  &.g-btn-tertiary {
    color: #3c60da;
    background-color: #69f;
  }

  svg {
    height: 20px;
    width: 20px;
    vertical-align: middle;
    fill: #FFF;
    margin-left: 8px;
  }
`;

export const Button = (props) => {
  const { children, type, isDisabled } = props;
  return (
    <button
      css={styles}
      className={classNames({
        'g-btn-primary': type === 'primary',
        'g-btn-secondary': type === 'secondary',
        'g-btn-tertiary': type === 'tertiary',
        'g-btn-ghost': type === 'ghost',
      })}
      disabled={isDisabled}
    > 
      {children}
      <svg><use href="#ad-arrow-down" /></svg>
    </button>
  );
}
