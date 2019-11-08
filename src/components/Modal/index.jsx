import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';

const Modal = ({ imgSrc, closeModal }) => { 
  
  const handleClick = ({ target }) => {
    if (target.id !== "overlay") return;
    closeModal();
  }

  return (
    <div className={css.overlay} id="overlay" onClick={handleClick}>
      <img className={css.modal} src={imgSrc} alt="FullSizePhoto" />
    </div>
  )
}

Modal.defaultProps = {
  imgSrc: "https://delvin.by/wp-content/uploads/2019/06/empty.png",
}

Modal.propTypes = {
  imgSrc: PropTypes.string,
};

export default Modal;