export type envNames = 'KREATTIX_PREFIX'
export type envProps = (key: envNames) => string

export const env: envProps = (key) => {
  return import.meta.env[key] || ''
}
