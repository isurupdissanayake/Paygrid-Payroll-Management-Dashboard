import React from 'react';
import { MenuIcon, BellIcon, UserIcon, SearchIcon } from 'lucide-react';
interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export const Header = ({
  sidebarOpen,
  setSidebarOpen
}: HeaderProps) => {
  return <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full flex items-center px-4">
        <div className="flex items-center space-x-8 flex-1">
          <div className="flex items-center space-x-3">
            <button type="button" className="md:hidden -ml-0.5 h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900" onClick={() => setSidebarOpen(true)}>
              <MenuIcon className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold text-blue-600">Paygrid</h1>
          </div>
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="w-full">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="search" className="block w-full border border-gray-200 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" placeholder="Search employees, payroll, reports..." />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-gray-500">
            <BellIcon className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>;
};