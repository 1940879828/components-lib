import dayjs from "dayjs"
import type React from "react"
import { useEffect, useState } from "react"

const CountDown = ({ value }: { value: number }) => {
  return (
    <span className="countdown">
      <span style={{ "--value": value } as React.CSSProperties} />
    </span>
  )
}

export const TimeDisplay = () => {
  const [remainingTime, setRemainingTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(dayjs())
    }, 1000)

    return () => clearInterval(interval) // 清除定时器
  }, [])

  const hours = remainingTime.hour()
  const minutes = remainingTime.minute()
  const seconds = remainingTime.second()

  return (
    <div>
      <CountDown value={hours} />
      <span>:</span>
      <CountDown value={minutes} />
      <span>:</span>
      <CountDown value={seconds} />
    </div>
  )
}

export default CountDown
