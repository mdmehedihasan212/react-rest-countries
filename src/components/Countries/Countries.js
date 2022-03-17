import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Rest All Countries</h1>

            <div className='container-element'>
                {
                    Countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;