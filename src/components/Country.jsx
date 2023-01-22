import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageNotFound from './PageNotFound'

const Country = ({ countries }) => {
    let { id } = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [border, setBorder] = useState([])
    const [getBorder, setGetBorder] = useState([])


    useEffect(() => {
        const filterResults = countries.filter(country => (
            (country.name.common.toLocaleLowerCase()) === (id.toLocaleLowerCase())
        ))
        const borders = filterResults.map(country => country.borders)
        setBorder(borders)
        setSearchResults(filterResults)
    }, [id, countries])


    useEffect(() => {
        const fetchBorders = async () => {
            try {
                if (border.length !== 0 && border[0] != undefined) {
                    const Border_API = `https://restcountries.com/v3.1/alpha?codes=${border.join(",")}`
                    const response = await fetch(`${Border_API}`)
                    const data = await response.json()
                    // console.log(`${Border_API}`)
                    setGetBorder(data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchBorders()
    }, [border])

    return (
        <>
            <button><Link to={`/`}>back</Link></button>
            <div>
                {searchResults.map(country =>
                    <div key={country.name.common} >
                        <img src={country.flags.png} alt="" />
                        <div>
                            <h2>{country.name.common}</h2>
                            <p>Native Name: {country.altSpellings.join(", ")}</p>
                            <p>Population: {country.population.toLocaleString("en-US")}</p>
                            <p>Region: {country.region}</p>
                            {country.subregion ? <p>Sub Region: {country.subregion}</p> : <p>Sub Region: None</p>}
                            {country.capital ? <p>Capital: {country.capital}</p> : <p>Capital: None</p>}
                            <p>Top Level Domain: {country.tld}</p>
                            <p>Currencies: {country.currencies ? country.currencies[(Object.keys(country.currencies))[0]].name : <>None</>}</p>
                            {/* {country.currencies[(Object.keys(country.currencies))[1]] ? <p>Currencies: {country.currencies[(Object.keys(country.currencies))[1]].name} </p> : <></>} */}
                            <p>Languages: {country.languages ? Object.values(country.languages).join(", ") : <>None</>}
                            </p>
                        </div>
                        {/* {country.borders ? <div>Border Countires: {country.borders.map(border => <li>{border}</li>)}</div> : <div>Border Countires: None</div>} */}

                        {country.borders ? <div>Border Countires: {getBorder.map(a => <Link to={`/country/${a.name.common}`}><button key={a.name.common}>{a.name.common}</button></Link>)}</div> : <div>Border Countires: None</div>}
                    </div>
                )}
                {
                    // if don't exist. 
                    !searchResults.length &&
                    <PageNotFound />
                }
            </div>
        </>
    )
}

export default Country