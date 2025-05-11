import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
export const Card = ({
  children,
  className = '',
  title
}: CardProps) => {
  return <div className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      {title && <div className="px-4 py-3 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        </div>}
      <div className="p-4">{children}</div>
    </div>;
};