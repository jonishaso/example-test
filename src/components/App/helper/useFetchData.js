import { useEffect, useState } from 'react'
import fetchData from '#help/api'

const useFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [, setIsError] = useState(false)
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
      .catch(err => {
        console.log(err)
        setIsError(true)
      })
  }, [])
  return [barsValues, buttonsValues, loading, limitValue, setBarsValues]
}
export default useFetchData
