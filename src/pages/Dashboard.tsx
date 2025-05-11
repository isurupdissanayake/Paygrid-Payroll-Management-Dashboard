import React from 'react';
import { Card } from '../components/ui/Card';
import { UsersIcon, DollarSignIcon, CalendarIcon, ClockIcon, TrendingUpIcon, AlertCircleIcon, UserPlusIcon, UserMinusIcon, CheckCircleIcon, XCircleIcon, CalendarDaysIcon, SendIcon, UserCheckIcon, FileEditIcon, CalendarPlusIcon, ClipboardCheckIcon, BarChart2Icon, FileTextIcon, PieChartIcon } from 'lucide-react';
export const Dashboard = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your organization's payroll and employee statistics
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-gray-200 shadow-none">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Employees
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">124</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium">+4%</span>
                <span className="text-xs text-gray-500 ml-1">
                  from last month
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <DollarSignIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Payroll</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">$245,350</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium">
                  +2.5%
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  from last month
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <AlertCircleIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Issues
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">12</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-yellow-600 font-medium">
                  4 urgent
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  need attention
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Average Attendance
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">96.8%</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-green-600 font-medium">
                  +1.2%
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  from last month
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card className="border border-gray-200 shadow-none" title="Quick Actions">
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <UserCheckIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Approve Leave</span>
              <span className="text-xs text-gray-500 mt-1">5 pending</span>
            </button>
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <SendIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Send Payslips</span>
              <span className="text-xs text-gray-500 mt-1">Due today</span>
            </button>
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <FileEditIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Review Loans</span>
              <span className="text-xs text-gray-500 mt-1">3 requests</span>
            </button>
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <CalendarPlusIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Schedule Review</span>
              <span className="text-xs text-gray-500 mt-1">Next week</span>
            </button>
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <UserPlusIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Add Employee</span>
              <span className="text-xs text-gray-500 mt-1">Quick add</span>
            </button>
            <button className="flex flex-col items-center p-4 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
              <ClipboardCheckIcon className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm font-medium">Run Payroll</span>
              <span className="text-xs text-gray-500 mt-1">For May 2023</span>
            </button>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none" title="Department Salary Distribution">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">
                  Engineering
                </span>
                <span className="text-sm font-medium text-gray-900">
                  $85,400/month
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: '45%'
              }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">45 employees</span>
                <span className="text-xs text-gray-500">
                  Avg: $1,897/person
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">
                  Marketing
                </span>
                <span className="text-sm font-medium text-gray-900">
                  $54,200/month
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: '28%'
              }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">28 employees</span>
                <span className="text-xs text-gray-500">
                  Avg: $1,935/person
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">Sales</span>
                <span className="text-sm font-medium text-gray-900">
                  $62,800/month
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: '33%'
              }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">32 employees</span>
                <span className="text-xs text-gray-500">
                  Avg: $1,962/person
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">
                  Operations
                </span>
                <span className="text-sm font-medium text-gray-900">
                  $42,950/month
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
                width: '22%'
              }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">19 employees</span>
                <span className="text-xs text-gray-500">
                  Avg: $2,260/person
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none" title="Employee Overview">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <UserPlusIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">
                  New Hires (This Month)
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900">7</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <UserMinusIcon className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm text-gray-600">Resignations</span>
              </div>
              <span className="text-sm font-medium text-gray-900">2</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <CalendarDaysIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">On Leave Today</span>
              </div>
              <span className="text-sm font-medium text-gray-900">5</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Present Today</span>
              </div>
              <span className="text-sm font-medium text-gray-900">117</span>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none" title="Reports Overview">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <BarChart2Icon className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600">
                  Monthly Payroll Report
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                Due in 2 days
              </span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <FileTextIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">
                  Tax Compliance Report
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <PieChartIcon className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-sm text-gray-600">
                  Department Analysis
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUpIcon className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-sm text-gray-600">
                  Growth Projections
                </span>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-800">
                Draft
              </span>
            </div>
          </div>
        </Card>
        <Card className="border border-gray-200 shadow-none" title="Upcoming Events">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <CalendarIcon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  May Payroll Processing
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  May 30, 2023 • 2 days remaining
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <AlertCircleIcon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Tax Filing Deadline
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  June 5, 2023 • 8 days remaining
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <UsersIcon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Performance Reviews
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  June 15, 2023 • 18 days remaining
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>;
};