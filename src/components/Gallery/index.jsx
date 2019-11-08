import React, { Fragment } from 'react';
import PhotoCard from '../PhotoCard';
import css from './style.module.scss'

const Gallery = ({ imageList, toFullView, loadMore }) => {

  return (
    <Fragment>
      <ul className={css.gallery}>
        {imageList.map(el => <PhotoCard key={el.id} props={el} toFullView={toFullView}/>)}
      </ul>
      <button className={css.button} onClick={loadMore}>Show more</button>
    </Fragment>
  )
}

export default Gallery;
