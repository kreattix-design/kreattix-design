export type Variants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type Screens = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Sizes = 'small' | 'medium' | 'large'
export type TextAlignments = 'start' | 'center' | 'end' | 'justify'
export type FlexDirections = 'horizontal' | 'vertical'
export type BorderStyles = 'solid' | 'dashed' | 'dotted'
export type AlignItems = 'start' | 'center' | 'end'
export type JustifyContents = 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
export type Orientations = 'left' | 'center' | 'right'
export type Gutters = 0 | 1 | 2 | 3 | 4 | 5
export type ResponsiveGutters = {
  sm?: Gutters
  lg?: Gutters
  xl?: Gutters
  xxl?: Gutters
}
