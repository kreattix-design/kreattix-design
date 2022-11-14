import { createContext, FC, useContext, useMemo } from 'react'

import { Provider } from '../provider'
import {
  KreattixAppContextProps,
  KreattixAppProps,
  SiderItemProps,
  SiderObjectProps,
} from './types'

const KreattixAppContext = createContext<KreattixAppContextProps>({
  sider: {
    getSider: () => undefined,
    addSider: () => null,
    removeSider: () => null,
  },
})

export const useKreattixAppContext = () => useContext(KreattixAppContext)

const KreattixApp: FC<KreattixAppProps> = (props) => {
  const { children, appConfig = {} } = { ...props }

  const siders: SiderObjectProps = {}
  const setSiders = (sider: SiderItemProps) => (siders[sider.siderKey] = sider)

  const contextValue = useMemo<KreattixAppContextProps>(
    () => ({
      sider: {
        getSider: (siderKey) => siders[siderKey] || null,
        addSider: (sider) => setSiders(sider),
        removeSider: (siderKey) => {
          if (siders[siderKey]) delete siders[siderKey]
        },
      },
    }),
    [siders],
  )

  return (
    <KreattixAppContext.Provider value={contextValue}>
      <Provider value={appConfig}>{children}</Provider>
    </KreattixAppContext.Provider>
  )
}

export default KreattixApp
