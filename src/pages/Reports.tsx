import React from 'react';
import { Card } from '../components/ui/Card';
import { DownloadIcon, BarChart2Icon, PieChartIcon, TrendingUpIcon, FileTextIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';
export const Reports = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <p className="mt-1 text-sm text-gray-500">
          Generate and view financial and employee reports
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <BarChart2Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">Payroll Summary</h3>
          <p className="mt-2 text-sm text-gray-500">
            View a summary of all payroll transactions by period
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <PieChartIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">
            Department Expenses
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            View expense breakdown by department and category
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <TrendingUpIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">Salary Trends</h3>
          <p className="mt-2 text-sm text-gray-500">
            Analyze salary trends over time across departments
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <FileTextIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">Tax Summary</h3>
          <p className="mt-2 text-sm text-gray-500">
            View tax withholdings and employer contributions
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <DollarSignIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">Benefits Report</h3>
          <p className="mt-2 text-sm text-gray-500">
            View employee benefits and associated costs
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
        <Card className="flex flex-col items-center text-center p-6 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <CalendarIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">Time Off Report</h3>
          <p className="mt-2 text-sm text-gray-500">
            View employee time off and leave balances
          </p>
          <button className="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <DownloadIcon className="h-3.5 w-3.5 mr-1.5" />
            Generate Report
          </button>
        </Card>
      </div>
      <Card title="Recent Reports">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated By
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map(item => <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {['April Payroll Summary', 'Q1 Tax Report', 'Department Expenses - Engineering', 'Benefit Costs Analysis', 'Annual Leave Summary'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {['Payroll', 'Tax', 'Expenses', 'Benefits', 'Time Off'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {['May 15, 2023', 'Apr 10, 2023', 'Apr 2, 2023', 'Mar 28, 2023', 'Mar 15, 2023'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {['Admin User', 'Finance Manager', 'HR Director', 'Admin User', 'HR Director'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      <DownloadIcon className="h-4 w-4" />
                    </a>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
};