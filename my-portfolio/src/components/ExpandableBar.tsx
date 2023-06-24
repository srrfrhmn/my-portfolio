import { useState } from 'react';

interface ExpandableBarProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableBar: React.FC<ExpandableBarProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-fit h-fit">
      <button
        className="button-cont fill-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <div 
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="w-full py-4 px-6 ml-1 mt-2 bg-white shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandableBar;