import { toSvg } from "jdenticon"
import { useContext } from "react"
import { Web3Context } from "../context/web3context"

export const Settings: React.FC<{}> = () => {

  const { account } = useContext(Web3Context)
  const bigprofile = toSvg(account, 120)
  return (
    <div className="w-1/2 mx-auto">
      <div className="bg-raisin mt-10 h-screen text-white p-4">
        <div className="profile flex flex-row gap-6 items-center p-2">
          <div dangerouslySetInnerHTML={{ __html: bigprofile }} />
          <div>
            <div className="text-2xl font-bold">Account</div>
            <div className="italic text-gray-200">{account}</div>
          </div>
        </div>
      </div>
    </div>
  )
}