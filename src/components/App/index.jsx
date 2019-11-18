import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import css from "./style.module.scss";

import SearchForm from '../SearchForm';
import Gallery from '../Gallery';
import Modal from '../Modal';

class App extends Component {
  abortController = new AbortController();
  state = {
    isFullView: false,
    imgSrc: "",
    images: [],
    spinner: true,
    error: '',
  }
  query = '';
  per_page = 12;
  page = 1;
  api_key = '14090322-33bc1de3434a551c0882d475d';

  componentDidMount() {
    this.fetchPhotoData(this.query);
    window.addEventListener("keydown", this.handlePressKey);
  }

  componentDidUpdate(prevProps, prevState) {
    const { images: { length } } = this.state;
    if (length !== prevState.images.length && length !== this.per_page) {
        window.scrollBy({
          top: 640,
          behavior: 'smooth'
        });
      }
  }
  
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressKey);
  }

  handlePressKey = (evt) => {
    if (evt.code === "Escape") this.setState({ isFullView: false });
  }

  loadMore = () => {
    this.page += 1;
    this.fetchPhotoData();
  }

  fetchPhotoData = () => {
    if (!this.state.spinner) this.setState({ spinner: true });
    const queryEncoded = encodeURI(this.query);
    axios
      .get(`https://pixabay.com/api/?key=${this.api_key}&q=${queryEncoded}&image_type=all&per_page=${this.per_page}&page=${this.page}`)
      .then(res => this.setState(({ images }) => ({ images: [...images, ...res.data.hits] })))
      .catch(err => this.setState({ error: err }))
      .finally(() => this.setState({ spinner: false }));
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.querySelector('input').value;
    if (this.query === query) return;
    this.page = 1;
    this.query = query;
    this.setState({ images: [] });
    this.fetchPhotoData();
  }

  toFullView = (imgSrc) => {
    this.setState({ isFullView: true, imgSrc: imgSrc }); 
  }

  closeModal = () => {
    this.setState({isFullView: false});
  }

  render() {
    const { imgSrc, isFullView, images, spinner, error } = this.state;

    return (
      <Fragment>
        <SearchForm onSubmit={this.onSubmit} />
        {spinner && <Loader timeout={5000} className={css.spinner} />}
        {error && <h2>{this.state.error}</h2>}
        {images[0] && <Gallery imageList={images} toFullView={this.toFullView} loadMore={this.loadMore}/>}
        {isFullView && <Modal imgSrc={imgSrc} closeModal={this.closeModal}/>}
      </Fragment>
    );
  }
}

export default App;
