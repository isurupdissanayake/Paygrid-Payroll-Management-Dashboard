import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Payroll } from './pages/Payroll';
import { Employees } from './pages/Employees';
import { Settings } from './pages/Settings';
import { Reports } from './pages/Reports';
import { Loans } from './pages/Loans';
import { Payslips } from './pages/Payslips';
import { PayGrades } from './pages/PayGrades';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/pay-grades" element={<PayGrades />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>;
}