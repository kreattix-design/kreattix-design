import { createContext, FC, useMemo, useState } from 'react'

import { Provider } from '../provider'
import { KreattixAppContextProps, KreattixAppProps, SiderItemProps } from './types'

const KreattixAppContext = createContext<KreattixAppContextProps>({
  sider: {
    list: [],
    getSider: () => undefined,
    addSider: () => null,
    removeSider: () => null,
  },
})

const KreattixApp: FC<KreattixAppProps> = (props) => {
  const { children, appConfig = {} } = { ...props }

  const [siders, setSiders] = useState<SiderItemProps[]>([])

  const contextValue = useMemo<KreattixAppContextProps>(
    () => ({
      sider: {
        list: [],
        getSider: (siderKey) => siders.find((sider) => sider.siderKey === siderKey),
        addSider: (sider) => setSiders((prev) => [...prev, sider]),
        removeSider: (siderKey) => siders.filter((sider) => sider.siderKey !== siderKey),
      },
    }),
    [],
  )

  return (
    <KreattixAppContext.Provider value={contextValue}>
      <Provider value={appConfig}>{children}</Provider>
    </KreattixAppContext.Provider>
  )
}

export default KreattixApp
