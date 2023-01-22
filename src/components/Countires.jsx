import { useState, useEffect } from "react"
import CountiresInfo from "./CountiresInfo"

const Home = ({ countries }) => {
    const [getCountry, setGetCountry] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const filterResults = countries.filter(country => (
            (country.name.common.toLocaleLowerCase()).includes(getCountry.toLocaleLowerCase())
        ))
        setSearchResults(filterResults)
    }, [getCountry, countries])

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
                Filter by Region
                <ul className="filterRegion2">
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
            </div>
            {searchResults.length ? (<CountiresInfo searchResults={searchResults} />) : (<p>No result for {getCountry}</p>)}
        </main>
    )
}

export default Home
