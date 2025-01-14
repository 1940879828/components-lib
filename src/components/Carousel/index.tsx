import Button from "@/components/Button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type ReactNode, useEffect, useRef, useState } from "react"
import styles from "./index.module.css"

interface Props {
  list: ReactNode[]
}

const Carousel = (props: Props) => {
  const { list } = props
  const data = [...list, list[0]]
  const container = useRef<HTMLDivElement>(null)
  const leftAdaptContainer = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    console.log(data)
    if (!container.current) return
    setTimeout(() => {
      setContainerWidth(container.current!.clientWidth)
    }, 20)
  }, [])

  const prev = () => {
    if (isTransitioning) return
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1)
      setTimeout(() => {
        setIsTransitioning(true)
        setCurrentIndex(data.length - 2)
      }, 20)
    } else {
      setIsTransitioning(true)
      setCurrentIndex((currentIndex - 1 + data.length) % data.length)
    }
  }

  const next = () => {
    if (isTransitioning) return
    if (currentIndex === data.length - 1 - 1) {
      setIsTransitioning(true)
      setCurrentIndex((currentIndex + 1) % data.length)
      setTimeout(() => {
        setCurrentIndex(0)
      }, 844)
    } else {
      setIsTransitioning(true)
      setCurrentIndex((currentIndex + 1) % data.length)
    }
  }

  const jump = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 844)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div>
      <div className={"w-full relative overflow-hidden"} ref={container}>
        <div
          style={{ marginLeft: `-${containerWidth * currentIndex}px` }}
          ref={leftAdaptContainer}
          className={cn("flex w-full", {
            [styles.transition]: isTransitioning
          })}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full">
              {item}
            </div>
          ))}
        </div>
        {/* dot */}
        <div className="absolute flex gap-2">
          {list.map((_, index) => (
            <div key={index} onClick={() => jump(index)}>111{index}</div>
          ))}
        </div>
        {/* arrow */}
        <div>
          <div className="absolute left-0 top-[50%] translate-y -translate-y-1/2">
            <Button
              variant="outline"
              className="border-none"
              shape="circle"
              onClick={prev}
            >
              <ChevronLeft />
            </Button>
          </div>
          <div className="absolute right-0 top-[50%] translate-y -translate-y-1/2">
            <Button
              variant="outline"
              className="border-none"
              shape="circle"
              onClick={next}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
