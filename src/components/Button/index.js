import React from 'react'
import classnames from 'classnames';

import './styles.scss'

const Button = ({ title, position, ...rest }) => {
  const btnClass = classnames('btn', {'btn--header': position === 'header', 'btn--promo': position === 'promo'});
  return (
    <button { ...rest } className={btnClass}>{ title || 'button'}</button>
  )
};

export default  Button