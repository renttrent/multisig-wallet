import Left from "./Navigation.left"
import Right from "./Navigation.right"

export const Navigation: React.FC<{}> = () => {
  
  return (
    <div className="text-white flex flex-col gap-6 md:gap-0 md:flex-row w-10/12 md:w-1/2 mt-6 justify-between mx-auto items-start md:items-center">
      <Left />
      <Right /> 
    </div>
  )
}