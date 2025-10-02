import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { Box, IconButton } from '@mui/material'
import { styles } from '@/styles/styles'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <IconButton
      sx={{
        ...styles.glassOutlined,
        borderRadius: "50%",
         padding: "0.2rem",
        height: "2rem",
        width: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <span
        className="embla__button embla__button--next"
        type="button"
        {...restProps}
      >
        <ArrowBackIosIcon sx={{ fontSize: "1rem", color: "#dec5e3" }} />
        {children}
      </span>
    </IconButton>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <IconButton
      sx={{
        ...styles.glassOutlined,
        borderRadius: "50%",
        height: "2rem",
        width: "2rem",
      }}
    >
      <span
        className="embla__button embla__button--next"
        type="button"
        {...restProps}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "#dec5e3" }} />
        {children}
      </span>
    </IconButton>
  )
}
