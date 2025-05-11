import React from 'react';
import { Card } from '../components/ui/Card';
import { PlusIcon, FilterIcon, SearchIcon } from 'lucide-react';
export const Loans = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Employee Loans</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track employee loans and advances
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative rounded-md shadow-sm max-w-xs w-full sm:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input type="text" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search loans" />
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FilterIcon className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Loan
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">$45,500</span>
            <p className="text-sm text-gray-500">Total Active Loans</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">$12,350</span>
            <p className="text-sm text-gray-500">Total Repaid This Month</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">8</span>
            <p className="text-sm text-gray-500">Active Loans</p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">3</span>
            <p className="text-sm text-gray-500">Pending Requests</p>
          </div>
        </Card>
      </div>
      <Card title="Active Loans">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Term
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monthly Payment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remaining
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5, 6].map(item => <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-800">
                          {['JD', 'SM', 'AK', 'RL', 'TW', 'MP'][item - 1]}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {['John Doe', 'Sarah Miller', 'Alex King', 'Rachel Lee', 'Tom Wilson', 'Mike Peterson'][item - 1]}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${[10000, 8000, 5000, 12000, 6500, 4000][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {['Jan 15, 2023', 'Feb 10, 2023', 'Mar 5, 2023', 'Dec 12, 2022', 'Apr 20, 2023', 'Nov 8, 2022'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {['12 months', '6 months', '10 months', '24 months', '12 months', '6 months'][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${[833, 1333, 500, 500, 542, 667][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${[7500, 5333, 4000, 6000, 6500, 1334][item - 1]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item === 2 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {item === 2 ? 'Pending Approval' : 'Active'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Details
                    </a>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
      <Card title="Loan Policies">
        <div className="space-y-4 text-sm">
          <div className="flex justify-between pb-3 border-b border-gray-100">
            <div className="font-medium">Maximum Loan Amount</div>
            <div>$15,000 or 3x monthly salary (whichever is lower)</div>
          </div>
          <div className="flex justify-between pb-3 border-b border-gray-100">
            <div className="font-medium">Maximum Term</div>
            <div>24 months</div>
          </div>
          <div className="flex justify-between pb-3 border-b border-gray-100">
            <div className="font-medium">Interest Rate</div>
            <div>0% (interest-free)</div>
          </div>
          <div className="flex justify-between pb-3 border-b border-gray-100">
            <div className="font-medium">Eligibility</div>
            <div>Minimum 6 months of employment</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium">Approval Process</div>
            <div>Department Head and HR Director</div>
          </div>
        </div>
      </Card>
    </div>;
};