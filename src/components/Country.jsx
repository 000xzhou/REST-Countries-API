import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Country = ({ countries }) => {
    let { id } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const filterResults = countries.filter(country => (
            (country.name.common.toLocaleLowerCase()) === (id.toLocaleLowerCase())
        ))
        setSearchResults(filterResults)
    }, [id, countries])
    return (
        <>
            <Link to={`/`}>back</Link>
            <div>
                {searchResults.map(country =>
                    <div key={country.name.common} >
                        <img src={country.flags.png} alt="" />
                        <div>
                            <h2>{country.name.common}</h2>
                            <p>Native Name: {country.altSpellings.map(native => <li>{native}</li>)}</p>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            {country.subregion ? <p>Sub Region: {country.subregion}</p> : <p>Sub Region: None</p>}
                            {country.capital ? <p>Capital: {country.capital}</p> : <p>Capital: None</p>}
                            <p>Top Level Domain: {country.tld}</p>
                            <p>Currencies: {country.currencies ? country.currencies[(Object.keys(country.currencies))[0]].name : <>None</>}</p>
                            {/* not the best fix... one day I will come across a better fix */}
                            {country.currencies[(Object.keys(country.currencies))[1]] ? <p>Currencies: {country.currencies[(Object.keys(country.currencies))[1]].name} </p> : <></>}
                            <p>Languages:
                                {country.languages ? Object.values(country.languages).map(lang => <li>{lang}</li>) : <>None</>}
                            </p>
                        </div>
                        {country.borders ? <div>Border Countires: {country.borders.map(border => <li>{border}</li>)}</div> : <div>Border Countires: None</div>}
                        {/* // need to get full name for borders  */}
                    </div>
                )}
            </div>
        </>
    )
}

export default Country