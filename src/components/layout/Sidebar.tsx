import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, DollarSignIcon, UsersIcon, SettingsIcon, BarChartIcon, CoinsIcon, FileTextIcon, XIcon, LogOutIcon, HelpCircleIcon, TrendingUpIcon } from 'lucide-react';
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export const Sidebar = ({
  sidebarOpen,
  setSidebarOpen
}: SidebarProps) => {
  const location = useLocation();
  const mainNavigation = [{
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboardIcon
  }, {
    name: 'Payroll',
    href: '/payroll',
    icon: DollarSignIcon
  }, {
    name: 'Employees',
    href: '/employees',
    icon: UsersIcon
  }, {
    name: 'Pay Grades',
    href: '/pay-grades',
    icon: TrendingUpIcon
  }, {
    name: 'Reports',
    href: '/reports',
    icon: BarChartIcon
  }, {
    name: 'Loans',
    href: '/loans',
    icon: CoinsIcon
  }, {
    name: 'Payslips',
    href: '/payslips',
    icon: FileTextIcon
  }];
  const bottomNavigation = [{
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon
  }, {
    name: 'Help Center',
    href: '/help',
    icon: HelpCircleIcon
  }];
  const renderNavLinks = (items: typeof mainNavigation) => {
    return items.map(item => {
      const isActive = location.pathname === item.href;
      const Icon = item.icon;
      return <Link key={item.name} to={item.href} className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
          <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}`} />
          {item.name}
        </Link>;
    });
  };
  return <>
      <div className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity ease-linear duration-300`} onClick={() => setSidebarOpen(false)} />
      <div className={`fixed inset-y-0 left-0 flex flex-col w-64 bg-white border-r border-gray-200 transform z-30 md:translate-x-0 md:static md:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition ease-in-out duration-300`}>
        <button className="md:hidden absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-900" onClick={() => setSidebarOpen(false)}>
          <XIcon className="h-6 w-6" />
        </button>
        <div className="flex-1 flex flex-col justify-between overflow-y-auto pt-5">
          <nav className="flex-1 px-3 space-y-1">
            {renderNavLinks(mainNavigation)}
          </nav>
          <div className="flex-shrink-0 border-t border-gray-200">
            <nav className="px-3 py-4 space-y-1">
              {renderNavLinks(bottomNavigation)}
              <button className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full">
                <LogOutIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                Logout
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>;
};