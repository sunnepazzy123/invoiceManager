import { SessionProvider } from 'next-auth/react'
import React, { FC, ReactNode } from 'react'

interface ProvidersType {
    children: ReactNode
}

const Providers: FC<ProvidersType> = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Providers