const stripTimeSuffix = (time: string) => time.split(' ')[0].split('(')[0].trim()

export const pad2 = (n: number) => n.toString().padStart(2, '0')

export const toDdMmYyyy = (d: Date) => {
  const dd = pad2(d.getDate())
  const mm = pad2(d.getMonth() + 1)
  const yyyy = d.getFullYear()
  return `${dd}-${mm}-${yyyy}`
}

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

export const addDays = (d: Date, deltaDays: number) => {
  const next = new Date(d)
  next.setDate(next.getDate() + deltaDays)
  return next
}

export const parseApiTimeToDate = (baseDate: Date, timeRaw: string) => {
  const t = stripTimeSuffix(timeRaw)
  const [hStr, mStr] = t.split(':')
  const h = Number(hStr)
  const m = Number(mStr)
  const out = new Date(baseDate)
  out.setHours(Number.isFinite(h) ? h : 0, Number.isFinite(m) ? m : 0, 0, 0)
  return out
}

export const format12h = (timeRaw: string) => {
  const t = stripTimeSuffix(timeRaw)
  const [hStr, mStr] = t.split(':')
  let h = Number(hStr)
  const m = Number(mStr)
  if (!Number.isFinite(h) || !Number.isFinite(m)) return timeRaw

  const suffix = h >= 12 ? 'PM' : 'AM'
  h = h % 12
  if (h === 0) h = 12
  return `${h}:${pad2(m)} ${suffix}`
}

export const formatCountdown = (totalSeconds: number) => {
  const s = Math.max(0, Math.floor(totalSeconds))
  const hh = Math.floor(s / 3600)
  const mm = Math.floor((s % 3600) / 60)
  const ss = s % 60
  return `${pad2(hh)}:${pad2(mm)}:${pad2(ss)}`
}

