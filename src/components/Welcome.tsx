import { motion } from "framer-motion"
import { useState } from "react"
import { BiRightArrow } from "react-icons/bi"
import { FaGithub, FaTwitter } from "react-icons/fa"

export const Welcome: React.FC<{}> = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className="w-1/2 m-auto">
    <motion.div className="mt-10"
    whileHover={{
      scale: 1.01
    }}
    >
      <div className="title p-6 text-2xl font-bold bg-white text-raisin-light rounded-sm shadow-raisin shadow-xl">
        Welcome to My Multi-signature Wallet App.
        <div className="text-lg font-semibold mt-2">
          This app allows you to create a multisig wallet as a smart contract on Ethereum
        </div>
        <div className="text-lg font-normal mt-2">
          If you want to use this app you need to install <span className="text-outor font-semibold cursor-pointer" onClick={() => window.location.href ="https://metamask.io/" }>Metamask</span>
        </div>
      </div>
    </motion.div>
    <motion.div className="text-2xl text-mint font-bold mt-6 cursor-pointer flex flex-row gap-1 items-center"
    whileHover={{
      color: "#a6e0be"
    }}
    onClick={() => {setShowMore(!showMore)}}
    >
      More info about me 
      <motion.span className="w-3 h-5"
      animate={{
        rotate: showMore ? 90: 0,
        x: showMore ? 10: 0,
        y: showMore ? -5: 0,
      }}
      >
        <BiRightArrow />
      </motion.span>
    </motion.div>
    {showMore &&
    <motion.div
    initial={{
      x: 0,
      y: 0,
    }}
    animate={{
      y: 10
    }}
    >
      <div className="p-2 bg-raisin text-white rounded-sm">
        <div className=" text-lg">
        Hey! My name is Rei. I love making websites and coding in general. Lately focusing on web3 developement, it looks interesting to me.
        </div>
        <div className="mt-4 text-gray-300 flex flex-row gap-3 items-center">
          You can follow me here: 
          <span className="flex flex-row gap-2 items-center">
            <FaGithub className="text-outor hover:text-gray-50 cursor-pointer" onClick={() => window.location.href = "https://github.com/renttrent"}/>
            <FaTwitter className="text-outor hover:text-gray-50 cursor-pointer" onClick={() => window.location.href = "https://twitter.com/reithedev"}/>
          </span>
        </div>
        <div className="mt-2 text-lg">
          Also I have a {" "}
          <motion.a href="https://reithedev.xyz"
            whileHover={{
              color: "#0081A7"
            }}
            transition={{
              delay: 0.007
            }}
          >
            website
          </motion.a>
        </div>
      </div>
    </motion.div>
    }
    </div>
  )
}