import { ArrowRight, ArrowRightIcon} from "lucide-react";

export const BUTTON_LINK = ({ link, title }) => {
  return (
    <a
      href={link}
      className="
        bg-slate-900 
        rounded-lg sm:rounded-xl 
        flex items-center 
        gap-2 sm:gap-4 
        w-fit 
        p-3 sm:p-4 
        hover:bg-gray-800 
        transition
      "
    >
      <span
        className="
          text-slate-700 
          p-1.5 sm:p-2 
          rounded-md sm:rounded-lg 
          bg-slate-100
          flex items-center justify-center
        "
      >
        <ArrowRight size={18} className="sm:hidden" />
        <ArrowRight size={22} className="hidden sm:block" />
      </span>

      <p
        className="
          text-white 
          text-[0.9em] sm:text-[1em] 
          leading-tight
          break-words
          max-w-[150px] sm:max-w-none
        "
      >
        {title ? title : `Join Our Innovation`}
      </p>
    </a>
  );
};

export const BUTTON_NEWS = ({link}) => {
  return (
           <a 
           href={link}
           className="bg-slate-100 rounded-xl cursor-pointer hover:shadow-lg flex items-center gap-2 w-fit px-4 py-2">
                <span className="text-white p-2 rounded-md bg-black ">
                  {/* <ArrowRight size={14}/> */}
                  <ArrowRightIcon size={14} />
                </span>
                <p className="text-slate-800 text-sm">Selengkapnya </p>
              </a>
  )
};  
