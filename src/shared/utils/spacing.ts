const UNIT_SPACE = 8 // check global.scss

export const toSpaceVar = (measure: number) => {
  const scaleRespectToUnit = (measure / UNIT_SPACE).toFixed(2)

  return `calc(${scaleRespectToUnit} * var(--space-1))`
}