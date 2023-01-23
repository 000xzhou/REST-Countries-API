import { useState } from 'react'
import { Link } from 'react-router-dom'

const CountiresInfo = ({ searchResults }) => {

    return (
        <div className='countires'>
            {
                searchResults.map(country =>
                    <Link to={`/country/${country.name.common}`}>
                        <div key={country.name.common} className="countiresInfo hvr-grow">
                            <img className='countiresImg' src={country.flags.svg} alt="" />
                            <div className='countiresBorder'>
                                <h2>{country.name.common}</h2>
                                <p>Population: <span>{country.population}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                {country.capital ? <p>Capital: <span>{country.capital}</span></p> : <p>Capital: <span>None</span></p>}
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default CountiresInfo