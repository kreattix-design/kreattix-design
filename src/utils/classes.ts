import { env } from './env'

export const getPrefix = (prefix: string) => prefix || env('KREATTIX_PREFIX') || 'kd'

export const joinClasses = (classes: string[] = []) => classes.join(' ').trim()

export const addPrefix = (classes: string | string[] = '', prefix = '') => {
  if (!classes || (classes && classes.length <= 0)) return ''
  if (typeof classes === 'string') return [getPrefix(prefix), classes].join('-')
  return joinClasses(classes.map((singleClass) => [getPrefix(prefix), singleClass].join('-')))
}

export const classnames = (
  classes: string | { [key: string]: any },
  staticClasses = '',
  prefix: string | boolean = false,
) => {
  const finalCLasses: string[] = []
  if (typeof classes === 'string') {
    finalCLasses.push(classes)
  } else {
    Object.keys(classes).forEach((singleClass) => {
      if (classes[singleClass]) finalCLasses.push(singleClass)
    })
  }

  if (prefix === false) {
    return joinClasses([...finalCLasses, staticClasses])
  } else {
    return joinClasses([addPrefix(finalCLasses, prefix == true ? '' : prefix), staticClasses])
  }
}
