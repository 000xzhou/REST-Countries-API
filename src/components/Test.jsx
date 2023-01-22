import { useState, useEffect } from "react"

const Test = ({ countries }) => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const filterResults = countries.filter(country => (
            (country.name.common.toLocaleLowerCase()).includes("peru")
        ))
        setSearchResults(filterResults)
    }, [countries])

    return (
        <>
            <div>{searchResults.map(country => country.name.common)}</div>
            <ul>{searchResults.map(country => <div>lang: {Object.values(country.languages).map(lang => <li>{lang}</li>)}</div>)}</ul>
        </>
    )
}

export default Test