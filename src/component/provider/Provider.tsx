import { merge } from 'lodash'
import { FC } from 'react'

import { KreattixContext } from './Context'
import { DefaultConfig } from './DefaultConfig'
import { ProviderProps } from './types'

export const Provider: FC<ProviderProps> = ({ children, value, ...rest }) => {
  return (
    <KreattixContext.Provider value={merge(DefaultConfig, value)} {...rest}>
      {children}
    </KreattixContext.Provider>
  )
}
