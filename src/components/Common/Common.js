import React, { useState} from 'react';
import styles from './styles.module.css';
import Modal from 'react-modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

Modal.setAppElement('#root')

export function Common() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const getData = async (e) => {
    e.preventDefault();

    const url = `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=title&limit=20`;
  

  try {
    const res =  await fetch(url);
    const data = await res.json();
    setMovies (data.data);
  }catch(err){
    console.error(err);
  }
}
       
    return (
        <div>
        <div className={styles.container}>
        <p className={styles.header}>FIND YOUR MOVIE</p>
        <Form inline onSubmit={getData}>
        <FormControl type="text" placeholder="Seacrh film ..." 
        className={styles.search} name="query" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button type='submit' variant="secondary" size="lg" active className={styles.button_search}>Search</Button>
        {/*<input type="text" className={styles.search} placeholder='Seacrh film ...'
         name="query" value={query} onChange={(e) => setQuery(e.target.value)} />
    <Button type='submit'>Search</Button>*/}
        </Form>
        {/*<div className={styles.block_with_filter}>
        <p className={styles.p_elem}>SEARH BY</p>
        <button className={styles.button_searchby}>TITLE</button>
        <button className={styles.button_searchby}>GENRE</button>
        </div>*/}
        </div>
        <div className={styles.block_with_filter_second}>
    <p className={styles.sortby}>{movies.length} movies found</p>
        {/*<div className={styles.sortby}>
        <p className={styles.inline}>Sort by</p>
        <a className={styles.links} rel='stylesheet' href="#"> release date </a>
        <p></p>
        <a className={styles.links} rel='stylesheet' href="#"> rating </a>
      </div>*/}
        </div>

        <div className={styles.container_film}>
        {movies.filter(movie => movie.poster_path).map(movie => {
          return <div className={styles.container_film_2} key={movie.id} onClick={() => setmodalIsOpen(true)}>
            <div className={styles.film__container}>
          <img className={styles.film__img} src={movie.poster_path} alt="Movie" />
            <div>{movie.title}</div>
            <div>
            {}<br/>
            {movie.genres}
            </div>
            </div>
            </div>
          
        })}
        </div>
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} style={{overlay:{backgroundColor:'grey'}}}>
            <h3>Films description</h3>
            <Button className={styles.button_close} variant="primary" size="lg" block onClick={() => setmodalIsOpen(false)}>Close</Button>
            <div>
            {movies.map(movie =>{
          return <ListGroup key={movie.id} ><ListGroup.Item><div>Film Name:{movie.title}</div>
          <div>Genre:{movie.genres}</div>
          <div>Overview:{movie.overview}</div>
          <div>Budget:{movie.budget}</div>
          <div>Rating:{movie.vote_average}</div>
          </ListGroup.Item>
          </ListGroup>
          })}
          </div>
            </Modal>
        </div>
        
    );
      
          }


