import { useState } from 'react'
import { Link } from 'react-router-dom'

const CountiresInfo = ({ searchResults }) => {

    return (
        <div className='countires'>
            {
                searchResults.map(country =>
                    <Link to={`/country/${country.name.common}`}>
                        <div key={country.name.common} className="countiresInfo">
                            <img className='countiresImg' src={country.flags.png} alt="" />
                            <div className='countiresBorder'>
                                <h2>{country.name.common}</h2>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                {country.capital ? <p>Capital: {country.capital}</p> : <p>Capital: None</p>}
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default CountiresInfo