import KeplerGl from 'kepler.gl'
import { processCsvData } from 'kepler.gl/processors'
import { addDataToMap } from 'kepler.gl/actions'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import helpers from '../../utils/api'

export const KeplerMap = ({ id, width, height, fileName }) => {
  const dispatch = useDispatch()
  const [csv, setCsv] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const csvData = await helpers.fetchCsvAsString(fileName)
      setCsv(csvData)
    } catch (error) {
      console.error('Error fetching CSV data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!isLoading && csv) {
      const sampleConfig = {
        visState: {
          filters: [
            {
              id: 'dateFilter_id',
              dataId: 'date_id',
              name: '', // The name of the column to be filtered
              type: 'timeRange', // Filter type to be used
            },
          ],
        },
      }

      const dataset = {
        info: { id: id, label: id },
        data: processCsvData(csv),
      }

      dispatch(
        addDataToMap({
          datasets: [dataset],
          options: { centerMap: true, readOnly: false },
          config: sampleConfig,
        })
      )
    }
  }, [isLoading, csv, dispatch])
  return (
    <>
      {isLoading ? (
        <p style={{ color: 'black' }}>Loading CSV data...</p>
      ) :
        <KeplerGl
          id={id}
          width={width}
          height={height}
          mapboxApiAccessToken="pk.eyJ1IjoidGgxbmttb3JlIiwiYSI6ImNsaThuNW9xZjEwdnEzZGx1aW5pejE0c2IifQ.W2xwlxuLImBxbx6lIMhMWg"
        />}
    </>
  )
}