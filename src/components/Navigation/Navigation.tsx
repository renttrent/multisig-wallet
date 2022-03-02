import Left from "./Navigation.left"
import Right from "./Navigation.right"

export default function Navigation() {
  
  return (
    <div className="text-white flex flex-row w-1/2 mt-6 justify-between mx-auto items-center">
      <Left />
      <Right /> 
    </div>
  )
}