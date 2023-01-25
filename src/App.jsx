import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Layout from './components/Layout'
import Country from './components/Country'
import Countires from './components/Countires'
import PageNotFound from './components/PageNotFound'

const App = () => {

  const API_URL = 'https://restcountries.com/v3.1/all'

  const [countries, setCountries] = useState([])

  // fetch All Countries
  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        setCountries(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllCountries()
  }, [])


  return (
    <Routes>
      {/* because of  base: "/REST-Countries-API/" in vite config=> change it if you wanna use on other site */}
      <Route path="/" exact element={<Layout />} >
        <Route index element={<Countires
          countries={countries}
        />} />

        <Route path="country/:id">
          <Route index element={<Country
            countries={countries}
          />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

      </Route>
    </Routes>
  )
}

export default App