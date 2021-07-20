import React from 'react';

export interface ModelStats {
  age?: number;
  height?: number;
  eyeColor?: string;
  hairColor?: string;
  bustLine?: number;
  waistLine?: number;
  hipLine?: number;
}

interface StatsProps {
  stats: ModelStats;
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ stats, className = '' }) => {
  const characteristics = [
    { value: stats.age, text: 'Age', unit: 'years' },
    { value: stats.height, text: 'Height', unit: 'cm' },
    { value: stats.eyeColor, text: 'Eye color', unit: null },
    { value: stats.hairColor, text: 'Hair color', unit: null },
    { value: stats.bustLine, text: 'Bust line', unit: 'cm' },
    { value: stats.waistLine, text: 'Waist line', unit: 'cm' },
    { value: stats.hipLine, text: 'Hip line', unit: 'cm' }
  ];

  return (
    <div className={`flex flex-col px-4 pt-4 md:pt-0 ${className}`}>
      <table>
        <tbody>
          {characteristics.map(
            ({ value, text, unit }) => value && (
              <tr key={text}>
                <th>{`${text}: `}</th>
                <td className="pl-2">{`${value} ${unit || ''}`}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
