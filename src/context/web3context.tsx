import { Provider } from "@ethersproject/providers";
import { InferProps } from "prop-types";
import { createContext, useState } from "react";

interface Web3 {
  account: string | undefined,
  account_ui: string,
  profile_svg: string,
  provider: Provider | any
}

const initialValue: Web3 = {
  account: "",
  account_ui: "",
  profile_svg: "",
  provider: undefined
}

interface Web3Update {
  updateAccount: Function,
  updateAccount_ui: Function,
  updateProfile_svg: Function,
  updateProvider: Function
}

const initialUpdater: Web3Update = {
  updateAccount: () => {},
  updateAccount_ui: () => {},
  updateProfile_svg: () => {},
  updateProvider: () => {}
}

export const Web3Context = createContext(initialValue)
export const Web3UpdateContext = createContext(initialUpdater)

const Web3Provider = ({children}: InferProps<any>) => {
  const [account, setAccount] = useState("")
  const [account_ui, setAccount_ui] = useState("")
  const [profile_svg, setProfile_svg] = useState("")
  const [provider, setProvider] = useState(undefined)

  const updateAccount = (input: string) => { setAccount(input) }
  const updateAccount_ui = (input: string) => { setAccount_ui(input) }
  const updateProfile_svg = (input: string) => { setProfile_svg(input) }
  const updateProvider = (input: any) => { setProvider(input) }

  return (
    <Web3Context.Provider value={{account, account_ui, profile_svg, provider}}>
      <Web3UpdateContext.Provider value ={{updateAccount, updateAccount_ui, updateProfile_svg, updateProvider}}>
      {children}
      </Web3UpdateContext.Provider>
    </Web3Context.Provider> 
  )
}

export default Web3Provider