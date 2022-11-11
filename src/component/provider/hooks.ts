import { useContext } from 'react'

import { KreattixContext } from './Context'
import { KreattixContextProps } from './types'

export const DefineKreattixConfig = (config: KreattixContextProps) => config
export const useKreattixContext = () => useContext(KreattixContext)
