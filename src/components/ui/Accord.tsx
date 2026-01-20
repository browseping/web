import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';


type AccordionContextType = {
    isOpen: boolean;
    toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null)

const useAccordion = () => {
    const ctx = useContext(AccordionContext)
    if(!ctx){
        throw new Error('Accordion component must be used inside <Accordion>')
    }
    return ctx
}

type AccordionProps = {
    children: React.ReactNode
}

export function Accordion({children}: AccordionProps){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(prev => !prev)

    return(
        <AccordionContext.Provider value={{isOpen, toggle}}>
            {children}
        </AccordionContext.Provider>
    )
}




type AccordionTriggerProps = {
  children: React.ReactNode;
};

export function AccordionTrigger({ children }: AccordionTriggerProps) {
  const { isOpen, toggle } = useAccordion();

  return (
    <button
      onClick={toggle}
      className="flex flex-row justify-between items-center w-full"
      aria-expanded={isOpen}
    >
      <div className="text-2xl font-bold text-white">
        {children}
      </div>

      {isOpen ? (
        <RiArrowDropUpLine color="gray" size={30} />
      ) : (
        <RiArrowDropDownLine color="gray" size={30} />
      )}
    </button>
  );
}



type AccordionContentProps = {
  children: React.ReactNode;
};

export function AccordionContent({ children }: AccordionContentProps) {
  const { isOpen } = useAccordion();

  return (
    <span
      className={cn(isOpen ? 'block' : 'hidden', 'space-y-4 text-gray-300 text-xl')}
    >
      {children}
    </span>
  );
}

