import React from 'react';
import css from './style.module.scss';
import PropTypes from 'prop-types';


const PhotoCard = ({ props, toFullView }) => {
  const { id, webformatURL, largeImageURL, comments, downloads, likes, views } = props;

  return (
    <li className={css.photoCard} key={id}>
      <img src={webformatURL} alt="WebFormatImg"/>

      <div className={css.stats}>
        <p className={css.statsItem}>
          <i className={css.statsItemIcon}>thumb_up</i>
          {likes}
        </p>
        <p className={css.statsItem}>
          <i className={css.statsItemIcon}>visibility</i>
          {views}
        </p>
        <p className={css.statsItem}>
          <i className={css.statsItemIcon}>comment</i>
          {comments}
        </p>
        <p className={css.statsItem}>
          <i className={css.statsItemIcon}>cloud_download</i>
          {downloads}
        </p>
      </div> 

      <button type="button" className={css.fullscreenButton} onClick={() => toFullView(largeImageURL)}>
        <i className={css.statsItemIcon}>zoom_out_map</i>
      </button>
    </li>
    )
}

PhotoCard.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  comments: PropTypes.number,
  downloads: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
  toFullView: PropTypes.func,
};

PhotoCard.defaultProps = {
  id: '',
  webformatURL: "https://delvin.by/wp-content/uploads/2019/06/empty.png",
  largeImageURL: "",
  comments: 0,
  downloads: 0,
  likes: 0,
  views: 0,
}

export default PhotoCard;

