import Button from "@/components/Button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type ReactNode, useEffect, useRef, useState } from "react"
import styles from "./index.module.css"

interface Props {
  list: ReactNode[]
  leftArrow?: ReactNode
  rightArrow?: ReactNode
}

const Carousel = (props: Props) => {
  const { list, leftArrow, rightArrow } = props
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
        <div className="absolute bottom-2 left-[50%] translate-x -translate-x-1/2 flex gap-2">
          {list.map((_, index) => (
            <div key={index} onClick={() => jump(index)}>
              <div
                className={cn(
                  "w-3 h-3 bg-secondary cursor-pointer rounded-full",
                  {
                    "bg-primary": index === currentIndex
                  }
                )}
              />
            </div>
          ))}
        </div>
        {/* arrow */}
        <div>
          <div
            onClick={prev}
            className="absolute left-2 top-[50%] translate-y -translate-y-1/2"
          >
            {leftArrow ? (
              leftArrow
            ) : (
              <Button variant="outline" className="border-none" shape="circle">
                <ChevronLeft />
              </Button>
            )}
          </div>
          <div
            onClick={next}
            className="absolute right-2 top-[50%] translate-y -translate-y-1/2"
          >
            {rightArrow ? (
              rightArrow
            ) : (
              <Button variant="outline" className="border-none" shape="circle">
                <ChevronRight />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
