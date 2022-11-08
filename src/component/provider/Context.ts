import { createContext } from 'react'

import { DefaultConfig } from './DefaultConfig'
import { KreattixContextProps } from './types'

export const KreattixContext = createContext<KreattixContextProps>(DefaultConfig)
