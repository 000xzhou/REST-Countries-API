import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageNotFound from './PageNotFound'
import LeftArrow from '../assets/arrow-left.svg'

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
            <button className='btn'>
                <Link className='inner-backBtn' to={`/`}>
                    <img className='left-arrow' src={LeftArrow} alt="" />
                    <div>back</div>
                </Link>
            </button>
            <div className='country-center'>
                {searchResults.map(country =>
                    <div className='country' key={country.name.common} >
                        <img className='country-flag' src={country.flags.svg} alt="" />
                        <div className='country-overall-info'>
                            <h2 className='country-name'>{country.name.common}</h2>
                            <div className='country-info'>
                                <p>Native Name: <span>{country.altSpellings.join(", ")}</span></p>
                                <p>Population: <span>{country.population.toLocaleString("en-US")}</span></p>
                                <p>Region: <span>{country.region}</span></p>
                                {country.subregion ? <p>Sub Region: <span>{country.subregion}</span></p> : <p>Sub Region: <span>None</span></p>}
                                {country.capital ? <p>Capital: <span>{country.capital}</span></p> : <p>Capital: <span>None</span></p>}

                            </div>
                            <div className='country-subInfo'>
                                <p>Top Level Domain: <span>{country.tld}</span></p>
                                <p>Currencies: {country.currencies ? <span>{country.currencies[(Object.keys(country.currencies))[0]].name}</span> : <span>None</span>}</p>
                                {/* {country.currencies[(Object.keys(country.currencies))[1]] ? <p>Currencies: {country.currencies[(Object.keys(country.currencies))[1]].name} </p> : <></>} */}
                                <p>Languages: {country.languages ? <span>{Object.values(country.languages).join(", ")}</span> : <span>None</span>}
                                </p>
                            </div>
                            {country.borders ? <p className='country-borders-grid'>Border Countires: <div className='country-borders'>{getBorder.map(a => <Link to={`/country/${a.name.common}`}><button className='btn' key={a.name.common}><span>{a.name.common}</span></button></Link>)}</div></p> : <div>Border Countires: None</div>}
                        </div>
                        {/* {country.borders ? <div>Border Countires: {country.borders.map(border => <li>{border}</li>)}</div> : <div>Border Countires: None</div>} */}

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