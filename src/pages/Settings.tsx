import React from 'react';
import { Card } from '../components/ui/Card';
import { BuildingIcon, GlobeIcon, CreditCardIcon, BellIcon, ShieldIcon, UsersIcon } from 'lucide-react';
export const Settings = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Organization Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your organization's settings and preferences
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <BuildingIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Company Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage your company information and business details
            </p>
          </div>
        </Card>
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <UsersIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              User Management
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage user accounts and access permissions
            </p>
          </div>
        </Card>
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <CreditCardIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Billing & Subscription
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Manage your subscription plan and payment methods
            </p>
          </div>
        </Card>
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <GlobeIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Localization</h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure language, timezone, and regional settings
            </p>
          </div>
        </Card>
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <BellIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure email and system notification preferences
            </p>
          </div>
        </Card>
        <Card className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
            <ShieldIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Security</h3>
            <p className="mt-1 text-sm text-gray-500">
              Configure security settings and authentication options
            </p>
          </div>
        </Card>
      </div>
      <Card title="Company Profile">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                Company name
              </label>
              <div className="mt-1">
                <input type="text" name="company-name" id="company-name" defaultValue="Acme Inc." className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
                Business type
              </label>
              <div className="mt-1">
                <select id="business-type" name="business-type" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option>Corporation</option>
                  <option>LLC</option>
                  <option>Partnership</option>
                  <option>Sole Proprietorship</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="business-address" className="block text-sm font-medium text-gray-700">
                Business address
              </label>
              <div className="mt-1">
                <input type="text" name="business-address" id="business-address" defaultValue="123 Business St, Suite 100" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1">
                <input type="text" name="city" id="city" defaultValue="San Francisco" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <div className="mt-1">
                <input type="text" name="state" id="state" defaultValue="California" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                ZIP / Postal code
              </label>
              <div className="mt-1">
                <input type="text" name="zip" id="zip" defaultValue="94107" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Cancel
            </button>
            <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save
            </button>
          </div>
        </form>
      </Card>
    </div>;
};