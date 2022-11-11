import { createContext, FC, useContext, useMemo } from 'react'

import { Provider } from '../provider'
import { KreattixAppContextProps, KreattixAppProps, SiderItemProps } from './types'

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

  let siders: SiderItemProps[] = []
  const setSiders = (sider: SiderItemProps) => (siders = [...siders, sider])

  const contextValue = useMemo<KreattixAppContextProps>(
    () => ({
      sider: {
        getSider: (siderKey) => siders.find((sider) => sider.siderKey === siderKey),
        addSider: (sider) => setSiders(sider),
        removeSider: (siderKey) => siders.filter((sider) => sider.siderKey !== siderKey),
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
