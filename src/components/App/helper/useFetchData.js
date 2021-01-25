import { useEffect, useState } from 'react'
import fetchData from 'localHelper/api.js'

const useFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [buttonsValues, setButtonsValues] = useState(null)
  const [limitValue, setLimitValue] = useState(null)
  const [barsValues, setBarsValues] = useState(null)

  useEffect(() => {
    fetchData()
      .then(data => {
        const { bars, buttons, limit } = data
        setButtonsValues(buttons)
        setLimitValue(limit)
        setBarsValues(bars)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setIsError(true)
      })
  }, [])
  return [barsValues, buttonsValues, loading, isError, limitValue, setBarsValues]
}
export default useFetchData
