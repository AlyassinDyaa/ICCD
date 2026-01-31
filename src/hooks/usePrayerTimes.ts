import { useState, useEffect } from 'react'

export interface PrayerTimes {
  Fajr: string
  Sunrise: string
  Dhuhr: string
  Asr: string
  Maghrib: string
  Isha: string
  Midnight?: string
  Firstthird?: string
  Lastthird?: string
  [key: string]: string | undefined
}

interface PrayerTimesResponse {
  code: number
  status: string
  data: {
    timings: PrayerTimes
    date: {
      readable: string
      timestamp: string
      hijri?: {
        date?: string
      }
    }
  }
}

export type PrayerTimesMeta = {
  readableDate?: string
  hijriDate?: string
  timestamp?: string
}

const stripTimeSuffix = (time: string) => {
  // Aladhan sometimes includes timezone suffix like "05:12 (EDT)"
  return time.split(' ')[0].split('(')[0].trim()
}

const pad2 = (n: number) => n.toString().padStart(2, '0')

const toDdMmYyyy = (d: Date) => {
  const dd = pad2(d.getDate())
  const mm = pad2(d.getMonth() + 1)
  const yyyy = d.getFullYear()
  return `${dd}-${mm}-${yyyy}`
}

const usePrayerTimes = (
  city: string = 'Albany',
  country: string = 'US',
  date: Date = new Date(),
  enabled: boolean = true
) => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null)
  const [meta, setMeta] = useState<PrayerTimesMeta>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setLoading(false)
      return
    }

    const fetchPrayerTimes = async () => {
      try {
        setLoading(true)
        setError(null)

        const dateStr = toDdMmYyyy(date)
        // Prefer date-specific endpoint if available; fall back to non-date endpoint.
        const urls = [
          `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`,
          `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`,
        ]

        let response: Response | null = null
        for (const url of urls) {
          // eslint-disable-next-line no-await-in-loop
          const r = await fetch(url)
          if (r.ok) {
            response = r
            break
          }
        }

        if (!response) {
          throw new Error('Failed to fetch prayer times')
        }

        const data: PrayerTimesResponse = await response.json()

        if (data.code === 200) {
          const sanitized: PrayerTimes = Object.fromEntries(
            Object.entries(data.data.timings).map(([k, v]) => [k, v ? stripTimeSuffix(v) : v])
          )

          setPrayerTimes(sanitized)
          setMeta({
            readableDate: data.data.date?.readable,
            hijriDate: data.data.date?.hijri?.date,
            timestamp: data.data.date?.timestamp,
          })
        } else {
          throw new Error('API returned error')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        // Fallback to static data if API fails
        setPrayerTimes({
          Fajr: '05:51',
          Sunrise: '07:11',
          Dhuhr: '12:09',
          Asr: '14:45',
          Maghrib: '17:07',
          Isha: '18:28',
          Midnight: '00:09',
        })
        setMeta({})
      } finally {
        setLoading(false)
      }
    }

    fetchPrayerTimes()
  }, [city, country, date, enabled])

  return { prayerTimes, meta, loading, error }
}

export default usePrayerTimes