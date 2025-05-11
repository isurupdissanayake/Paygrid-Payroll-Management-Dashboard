import React from 'react';
import { Card } from '../components/ui/Card';
import { TrendingUpIcon, DollarSignIcon, AwardIcon, ClockIcon, StarIcon, BriefcaseIcon, GraduationCapIcon, ShieldCheckIcon } from 'lucide-react';
export const PayGrades = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Pay Grades</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage salary structures, incentives, and deductions
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <TrendingUpIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Pay Grades
              </p>
              <h3 className="text-xl font-bold text-gray-900">6</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <StarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Incentives
              </p>
              <h3 className="text-xl font-bold text-gray-900">8</h3>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
              <ClockIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Review Period</p>
              <h3 className="text-xl font-bold text-gray-900">Quarterly</h3>
            </div>
          </div>
        </Card>
      </div>
      <Card title="Salary Grades">
        <div className="space-y-6">
          {[{
          grade: 'L1',
          title: 'Entry Level',
          range: '$35,000 - $45,000',
          employees: 28
        }, {
          grade: 'L2',
          title: 'Associate',
          range: '$45,000 - $65,000',
          employees: 42
        }, {
          grade: 'L3',
          title: 'Mid-Senior',
          range: '$65,000 - $85,000',
          employees: 35
        }, {
          grade: 'L4',
          title: 'Senior',
          range: '$85,000 - $120,000',
          employees: 15
        }, {
          grade: 'L5',
          title: 'Lead',
          range: '$120,000 - $150,000',
          employees: 8
        }, {
          grade: 'L6',
          title: 'Principal',
          range: '$150,000+',
          employees: 4
        }].map((grade, index) => <div key={grade.grade} className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">
                    {grade.grade}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {grade.title}
                  </h4>
                  <p className="text-sm text-gray-500">{grade.range}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {grade.employees} employees
              </div>
            </div>)}
        </div>
      </Card>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="Incentives">
          <div className="space-y-4">
            {[{
            name: 'Performance Bonus',
            type: 'Quarterly',
            amount: 'Up to 15%'
          }, {
            name: 'Skill Bonus',
            type: 'One-time',
            amount: '$500 - $2,000'
          }, {
            name: 'Attendance Bonus',
            type: 'Monthly',
            amount: '$200'
          }, {
            name: 'Project Completion',
            type: 'Variable',
            amount: '5-10%'
          }].map((incentive, index) => <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center">
                  <AwardIcon className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {incentive.name}
                    </p>
                    <p className="text-xs text-gray-500">{incentive.type}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {incentive.amount}
                </span>
              </div>)}
          </div>
        </Card>
        <Card title="Standard Deductions">
          <div className="space-y-4">
            {[{
            name: 'Income Tax',
            type: 'Progressive',
            amount: '10-35%'
          }, {
            name: 'Social Security',
            type: 'Fixed',
            amount: '6.2%'
          }, {
            name: 'Medicare',
            type: 'Fixed',
            amount: '1.45%'
          }, {
            name: 'Health Insurance',
            type: 'Fixed',
            amount: '$150/month'
          }].map((deduction, index) => <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {deduction.name}
                    </p>
                    <p className="text-xs text-gray-500">{deduction.type}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {deduction.amount}
                </span>
              </div>)}
          </div>
        </Card>
      </div>
    </div>;
};