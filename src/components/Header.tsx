import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import useTheme from "../hooks/useTheme";


export default function Header() {
    const {theme,toggleTheme} =  useTheme();
  return (
    <div className='flex justify-between text-md px-10 py-5 shadow-sm bg-elements '>
        <p className="font-extrabold ">Where in the world?</p>
        <div className="cursor-pointer select-none flex gap-2 justify-center items-center " onClick={toggleTheme}>
        {theme=="dark" ? <IoMoonSharp  size={18}/>:<IoIosSunny size={18}/>}
        <span className="capitalize">{theme} Mode</span>
        </div>
    </div>
  )
}
