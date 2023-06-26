// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { setInput } from '../store/slices/input';
import { setSearch } from '../store/slices/toggle';
import '../styles/Navbar.css';
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMovieList } from '../store/slices/apiSlice';


interface RootState {
    searchInput: {
        value: string;
    };
}

export interface FieldState{
    fields:{
        filed:string
    }
}
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const inputVal = useSelector((state: RootState) => state.searchInput.value);
    const fields = useSelector((state:FieldState)=>state.fields.filed)
   

    const handleSearchInput = () => {
        fetch(`https://api.themoviedb.org/3/search/${fields}?api_key=a78b452a729ea8d86aa6b629def81580&query=${inputVal}`)
            .then(res => res.json())
            .then(json => {            
                dispatch(setMovieList(json.results));
            })
    }

    return (
        <header>
            <div className='navbar'>
                <div className='logo_menu_wrapper'>
                    <Link to='/'>
                        <div className='logo'>
                            <span className='tm'>SM</span>
                            <p className='logo-name'>Sonic Movies</p>
                        </div>
                    </Link>

                </div>
                <div className='movie_search'>
                    <input
                        onChange={e => {
                            dispatch(setInput(e.target.value));
                        }}
                        type='text'
                        placeholder='Enter a keyword'
                        value={inputVal}
                    />
                    <button className='search-btn'
                        onClick={() => {
                            dispatch(setSearch(inputVal))
                            handleSearchInput() 
                            dispatch(setInput(""))
                            navigate('/')

                        }}>
                        <BsSearch />
                    </button>
                </div>

            </div>
        </header>
    );
};


export default Navbar;
