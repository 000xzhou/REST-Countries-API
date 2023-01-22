import { useState, useEffect } from "react"
import CountiresInfo from "./CountiresInfo"

const Home = ({ countries }) => {
    const [getCountry, setGetCountry] = useState("")
    const [filterRegion, setFilterRegion] = useState("")
    const [searchResults, setSearchResults] = useState([])

    if (filterRegion === "") {
        useEffect(() => {
            const filterResults = countries.filter(country => (
                (country.name.common.toLocaleLowerCase()).includes(getCountry.toLocaleLowerCase())
            ))
            setSearchResults(filterResults)
        }, [getCountry, filterRegion, countries])
    } else {
        useEffect(() => {
            const filterResults = countries.filter(country => (
                (country.region.toLocaleLowerCase()) === (filterRegion.toLocaleLowerCase()) &&
                (country.name.common.toLocaleLowerCase()).includes(getCountry.toLocaleLowerCase())
            ))
            setSearchResults(filterResults)
        }, [getCountry, filterRegion, countries])
    }

    return (
        <main>
            <form className="formCountry" onSubmit={e => e.preventDefault()}>
                <label htmlFor="country"></label>
                <input
                    id="country"
                    type="text"
                    value={getCountry}
                    placeholder='Search for a country'
                    onChange={e => setGetCountry(e.target.value)} />
            </form>
            <div className="filterRegion">
                <select name="region" id="region" value={filterRegion} onChange={e => setFilterRegion(e.target.value)} aria-label="Filter Countries By Region">
                    <option hidden value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            {searchResults.length ? (<CountiresInfo searchResults={searchResults} />) : (<p>No result for {getCountry}</p>)}
        </main>
    )
}

export default Home
