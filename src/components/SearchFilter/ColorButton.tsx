import React from 'react';

interface ColorButtonProps {
  setFilter: React.Dispatch<React.SetStateAction<{ values: string[] }>>,
  filter: { values: string[] }, cur: Set<string>, name: string

}

const ColorButton: React.FC<ColorButtonProps> = ({
  filter, setFilter, cur, name
}) => {
  const colors = {
    black: 'black',
    gray: 'gray-500',
    green: 'green-500',
    red: 'red-700',
    blonde: 'yellow-200',
    blond: 'yellow-200',
    orange: 'yellow-500',
    brown: 'yellow-900',
    'dark brown': 'gray-700',
    blue: 'blue-500',
    purple: 'purple-500',
    pink: 'pink-500',
    turquoise: 'green-300',
    'blue, red': 'gradient-to-r from-blue-500 to-red-500'
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className={`btn-white ${filter.values.length > 0 && 'bg-black text-white hover:bg-gray-700'
          }`}>
        {name}
      </button>
      <div className="absolute grid invisible w-32 grid-cols-4 gap-1 py-2 transition-all duration-300 origin-top-right transform bg-white shadow-lg opacity-0 justify-items-center dropdown-menu ">
        {[...cur].map((color) => (
          <button
            key={color}
            type="button"
            className={`h-5 w-5 bg-${colors[color]
              } border-2 capitalize  hover:border-gray-200  ${filter.values.includes(color)
              && 'border-black text-white hover:border-gray-700'
              }`}
            onClick={() => {
              const index = filter.values.indexOf(color);
              setFilter((prev) => {
                const res = index >= 0
                  ? prev.values.filter((val) => val !== color)
                  : [color, ...prev.values];

                return { ...prev, values: res };
              });
            }}>
            {' '}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorButton;
