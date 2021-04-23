import { CSSProperties } from "styled-components"
import {
  color,
  ColorProps,
  compose,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  letterSpacing,
  LetterSpacingProps,
  lineHeight,
  LineHeightProps,
  system,
  textAlign,
  TextAlignProps
} from "styled-system"

export const textDecoration = system({
  textDecoration: true,
})

export type TextDecoration = {
  textDecoration?: CSSProperties["textDecoration"]
}

export const textTransform = system({
  textTransform: true,
})

export type TextTranformProps = {
  textTransform?: CSSProperties["textTransform"]
}

export const fontStyles = compose(
  color,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontSize,
  textAlign,
  textDecoration,
  textTransform
)

export const backgroundColor = system({
  backgroundColor: true,
})

export type BackgroundColorProps = {
  backgroundColor?: CSSProperties["backgroundColor"]
}

export type FontStylesProps = FontWeightProps &
  FontSizeProps &
  LineHeightProps &
  LetterSpacingProps &
  ColorProps &
  TextAlignProps &
  TextDecoration &
  TextTranformProps
