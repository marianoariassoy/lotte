import { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'https://backend.ligadecapitanes.com.ar/lotte/api'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url
        const response = await axios.get<T>(urlOk)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, setLoading, error }
}

export default useFetch
