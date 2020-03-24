import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import variables from '../scss/_variables.scss';
import ResultsDisplay from './ResultsDisplay';

const SearchBar = (props) => {
    const [artist, setArtist] = useState('');
    const [artistData, setArtistData] = useState([]);
    
    const handleChange = (e) => {
        e.preventDefault();
        setArtist(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = `https://itunes.apple.com/search?term=`
                        +`${artist}`
                        +`&media=music&entity=album&`
                        +`attribute=artistTerm&limit=50`;
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setArtistData(prev => [...prev,...data.results])
        } catch(err) {
            throw new Error(err);
        }
    }
    return (
        <Fragment>
        <Bar>
            <Fragment>
                <form type = 'submit'                       
                      onSubmit = {(e)=>handleSubmit(e)}>
                <input type='text' 
                       placeholder='Enter an artist...'
                       onChange = {handleChange}
                       value = {artist}
                       >
                </input>
                <button>Go</button>
                </form>
            </Fragment>
        </Bar>
        <ResultsDisplay data = {artistData}/>
        </Fragment>
    )
}

export default SearchBar;

const Bar = styled.header`
    width: 100%;
    background-color: ${variables.primary};
    color: ${variables.white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;

    * {
        height: 3.5rem;
        text-align: center;
    }
    button {
        margin-left: 4rem;
        width: 8rem;
        border: none;
        border-radius: 6px;
    }

    input {
        width: 30rem;
        opacity: 0.7;
        border: none;
        border-radius: 6px
    }

    input:focus {
        background-color: ${variables.secondary};
        opacity: 1;
      }
`
const Article = styled.article`
      display: flex;
`