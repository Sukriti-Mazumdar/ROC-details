import React, { useState } from 'react';
import { ArrowLeft, Calendar, FileText, CheckCircle, XCircle, Clock, Download, Eye } from 'lucide-react';

const ClientDetailView = () => {
const [activeTab, setActiveTab] = useState<string>('overview');
const [selectedClient, setSelectedClient] = useState<'client1' | 'client2' | 'client3' | 'client4'>('client1');
  
interface ClientData {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  cin: string;
  filingType: string;
  assignedOperator: string;
  deadline: string;
  priority: string;
  amount: string;
  status: string;
}

const clientData: ClientData = {
  id: 'CL001',
  name: 'Priya Sharma',
  email: 'priya.sharma@gmail.com',
  phone: '+91 9876543210',
  company: 'Sharma Industries Pvt Ltd',
  cin: 'U72200DL2015PTC123456',
  filingType: 'ROC',
  assignedOperator: 'Rajesh Gupta',
  deadline: '2024-01-15',
  priority: 'High',
  amount: '₹15,000',
  status: 'In Progress'
};

const clientData2: ClientData = {
  id: 'CL002',
  name: 'Amit Kumar',
  email: 'amit.kumar@example.com',
  phone: '+91 9123456789',
  company: 'Kumar Enterprises',
  cin: 'U12345DL2020PTC543210',
  filingType: 'KYC',
  assignedOperator: 'Suresh Patel',
  deadline: '2025-07-31',
  priority: 'Medium',
  amount: '₹20,000',
  status: 'Pending'
};

const clientData3: ClientData = {
  id: 'CL003',
  name: 'Ravi Singh',
  email: 'ravi.singh@example.com',
  phone: '+91 9988776655',
  company: 'Singh Traders',
  cin: 'U98765DL2018PTC678901',
  filingType: 'GST',
  assignedOperator: 'Anita Desai',
  deadline: '2024-04-19',
  priority: 'High',
  amount: '₹25,000',
  status: 'In Progress'
};

const clientData4: ClientData = {
  id: 'CL004',
  name: 'Neha Verma',
  email: 'neha.verma@example.com',
  phone: '+91 9876541230',
  company: 'Verma Solutions',
  cin: 'U45678DL2022PTC789012',
  filingType: 'TDS',
  assignedOperator: 'Vikram Singh',
  deadline: '2024-07-25',
  priority: 'Medium',
  amount: '₹18,000',
  status: 'Pending'
};

  interface RocCase {
    id: string;
    category: string;
    form: string;
    frequency: string;
    period?: string;
    agmDate?: string;
    dueDate?: string;
    extendedDate?: string;
    dateOfFiling?: string;
    acknowledgmentNo?: string;
    taxFees?: string;
    attachment?: string;
    status?: string;
    documents?: string[];
    eventDate?: string;
  }

const rocCases: RocCase[] = [
  {
    id: 'CASE-2',
    category: 'ROC',
    form: 'AOC-4',
    frequency: 'Yearly',
    period: '31-3-2024',
    agmDate: '30-09-2024',
    dueDate: '29-10-2024',
    extendedDate: 'Yes/No',
    dateOfFiling: '25-10-2024',
    acknowledgmentNo: 'AB123456',
    taxFees: '₹400',
    attachment: 'AOC 4',
    status: 'Completed',
    documents: ['Challan', 'Balance Sheet', 'Profit & Loss', 'Director report', 'Other Documents']
  },
  {
    id: 'CASE-3',
    category: 'ROC',
    form: 'MGT14',
    frequency: 'AS AND WHEN REQD',
    period: '31-03-2024',
    eventDate: '15-04-2023',
    dueDate: '14-05-2024',
    extendedDate: 'Yes/No',
    dateOfFiling: '15-05-2024',
    acknowledgmentNo: 'ab6597450',
    taxFees: '₹1800',
    attachment: 'MGT 14',
    status: 'Completed',
    documents: ['Challan', 'Notice', 'Resolution', 'Other Documents']
  },
  {
    id: 'CASE-4',
    category: 'ROC',
    form: 'MGT7',
    frequency: 'Yearly',
    period: '31-03-2024',
    agmDate: '30-09-2024',
    dueDate: '29-11-2024',
    extendedDate: 'Yes/No',
    dateOfFiling: '10-11-2024',
    acknowledgmentNo: 'AB598470',
    taxFees: '₹400',
    attachment: 'MGT7',
    status: 'In Progress',
    documents: ['CHALLAN', 'Notice', 'List of Share Holder', 'List of Director', 'Other attachment']
  }
];

const gstCases: RocCase[] = [
  {
    id: 'CASE-5',
    category: 'GST',
    form: 'GSTR3B',
    frequency: 'MONTHLY',
    period: '########',
    dueDate: '########',
    extendedDate: 'Yes/No',
    dateOfFiling: '19-04-2024',
    acknowledgmentNo: '12455222',
    attachment: 'FORM 3B',
    status: 'In Progress',
    documents: ['CHALLAN', 'ITC LEDGER', 'COMPUTATION OF LIABILITIES', 'GSTR 2A', 'GSTR 2B', 'Other Documents']
  }
];

const tdsCases: RocCase[] = [
  {
    id: 'CASE-6',
    category: 'TDS/TCS',
    form: '26Q',
    frequency: 'QTRLY',
    period: '########',
    dueDate: '########',
    extendedDate: 'Yes/No',
    dateOfFiling: '25-07-2024',
    acknowledgmentNo: '12225444',
    attachment: '26Q',
    // remarks: 'CHALLAN, STATEMENT OF DEDUCTION/CONTRIBUTION, tds/tcs CERTIFICATE, Other Documents', // Removed because 'remarks' is not in RocCase interface
    status: 'Pending',
    documents: ['CHALLAN', 'STATEMENT OF DEDUCTION/CONTRIBUTION', 'tds/tcs CERTIFICATE', 'Other Documents']
  }
];

const rocCases2: RocCase[] = [
  {
    id: 'CASE-7',
    category: 'KYC',
    form: 'TRADE LIC',
    frequency: 'YEARLY',
    period: '31-03-2025',
    dueDate: '31-07-2024',
    extendedDate: 'Yes/No',
    dateOfFiling: '25-07-2024',
    acknowledgmentNo: '121313131',
    attachment: 'CHALLAN, CERTIFICATE, Other Documents',
    status: 'Pending',
    documents: ['CHALLAN', 'CERTIFICATE', 'Other Documents']
  },
  {
    id: 'CASE-8',
    category: 'KYC',
    form: 'PROFESSION',
    frequency: 'YEARLY',
    period: '31-03-2025',
    dueDate: '31-07-2024',
    extendedDate: 'Yes/No',
    dateOfFiling: '18-07-2024',
    acknowledgmentNo: '12121254',
    attachment: 'CHALLAN, CERTIFICATE, Other Documents',
    status: 'Pending',
    documents: ['CHALLAN', 'CERTIFICATE', 'Other Documents']
  },
  {
    id: 'CASE-9',
    category: 'KYC',
    form: 'PAN',
    frequency: 'ONE TIME',
    period: '',
    dueDate: '',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '',
    taxFees: '',
    attachment: 'PAN CARD',
    status: 'Pending',
    documents: ['PAN CARD']
  },
  {
    id: 'CASE-10',
    category: 'KYC',
    form: 'PASSPORT',
    frequency: 'AS REQUIRED',
    period: '',
    dueDate: '25-10-2030',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '12121254',
    attachment: 'PASS port, Other Documents',
    status: 'Pending',
    documents: ['PASS port', 'Other Documents']
  },
  {
    id: 'CASE-11',
    category: 'KYC',
    form: 'DRIVING LICENCE',
    frequency: 'AS REQUIRED',
    period: '',
    dueDate: '25-10-2030',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '12121254',
    attachment: 'DRIVING LICENCE, Other Documents',
    status: 'Pending',
    documents: ['DRIVING LICENCE', 'Other Documents']
  }
];

const additionalCases: RocCase[] = [
  {
    id: 'CASE-12',
    category: 'UTILITIES',
    form: 'ELECTRICITY',
    frequency: 'MONTHLY',
    period: '',
    dueDate: '25-10-2030',
    dateOfFiling: '',
    acknowledgmentNo: '12121254',
    attachment: 'BILL, PAYMENT RECEIPT, Other Documents',
    status: 'Pending',
    documents: ['BILL', 'PAYMENT RECEIPT', 'Other Documents']
  },
  {
    id: 'CASE-13',
    category: 'Immovable property',
    form: 'Title deed',
    frequency: '',
    period: '',
    dueDate: '25-10-2030',
    dateOfFiling: '',
    acknowledgmentNo: '',
    attachment: 'Query, Tax payment challan, Valuation report, Searching report, Mutation certificate, Corporation tax challan, Other Documents',
    status: 'Pending',
    documents: ['Query', 'Tax payment challan', 'Valuation report', 'Searching report', 'Mutation certificate', 'Corporation tax challan', 'Other Documents']
  },
  {
    id: 'CASE-14',
    category: 'Tax Audit',
    form: 'Form 3CD',
    frequency: 'YEARLY',
    period: '31-03-2024',
    dueDate: '########',
    extendedDate: 'Yes/No',
    dateOfFiling: '20-09-2024',
    acknowledgmentNo: '112233',
    attachment: 'Tax Audit, Acknowledgement, Audit Balance Sheet, Working, 26AS, AIS, Tally, Other Documents',
    status: 'Pending',
    documents: ['Tax Audit', 'Acknowledgement', 'Audit Balance Sheet', 'Working', '26AS', 'AIS', 'Tally', 'Other Documents']
  },
  {
    id: 'CASE-15',
    category: 'Statutory Audit',
    form: 'Audit report',
    frequency: 'YEARLY',
    period: '31-03-2024',
    dueDate: '########',
    extendedDate: 'Yes/No',
    dateOfFiling: '20-09-2024',
    acknowledgmentNo: '112233',
    attachment: 'Audit report, Director report, Audit Balance Sheet, Working, 26AS, AIS, Tally, Other Documents',
    status: 'Pending',
    documents: ['Audit report', 'Director report', 'Audit Balance Sheet', 'Working', '26AS', 'AIS', 'Tally', 'Other Documents']
  },
  {
    id: 'CASE-16',
    category: 'Bank Statement',
    form: 'Monthly',
    frequency: 'Monthly',
    period: '01-04-2024 to 30-04-2024',
    dueDate: '',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '',
    attachment: 'Bank Statement, Other documents',
    status: 'Pending',
    documents: ['Bank Statement', 'Other documents']
  },
  {
    id: 'CASE-17',
    category: 'Book of Account',
    form: 'Purchase',
    frequency: 'One to One',
    period: '',
    dueDate: '',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '',
    attachment: 'Purchase bill, Salary, Query Bill, Delivery Challan, Payment details, Testing report',
    status: 'Pending',
    documents: ['Purchase bill', 'Salary', 'Query Bill', 'Delivery Challan', 'Payment details', 'Testing report']
  },
  {
    id: 'CASE-18',
    category: 'Book of Account',
    form: 'confirmation',
    frequency: 'One to One',
    period: '01-04-2024 to 31-03-2024',
    dueDate: '',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '',
    attachment: 'Information of acc',
    status: 'Pending',
    documents: ['Information of acc']
  },
  {
    id: 'CASE-19',
    category: 'Movable property',
    form: 'Computer',
    frequency: 'Core i7',
    period: '',
    dueDate: '15-12-2024',
    extendedDate: '',
    dateOfFiling: '',
    acknowledgmentNo: '',
    attachment: 'ABC ltd',
    status: 'Pending',
    documents: ['Purchase bill', 'Commencement certificate', 'Other Documents']
  }
];

  interface DocumentStatus {
    status: 'approved' | 'rejected' | 'pending';
    remarks?: string;
  }

  const [documentStatuses, setDocumentStatuses] = useState<Record<string, DocumentStatus>>({});

  const handleDocumentAction = (caseId: string, docIndex: number, action: 'approved' | 'rejected' | 'pending', remarks: string = '') => {
    setDocumentStatuses(prev => ({
      ...prev,
      [`${caseId}-${docIndex}`]: { status: action, remarks }
    }));
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-in-progress';
      case 'Pending': return 'status-pending';
      default: return 'status-default';
    }
  };

  const getDocumentStatusIcon = (caseId: string, docIndex: number): React.ReactElement => {
    const status = documentStatuses[`${caseId}-${docIndex}`];
    if (!status) return <Clock className="icon-gray" />;

    switch (status.status) {
      case 'approved': return <CheckCircle className="icon-green" />;
      case 'rejected': return <XCircle className="icon-red" />;
      default: return <Clock className="icon-gray" />;
    }
  };

  const DocumentVerificationCard = ({ rocCase }: { rocCase: RocCase }) => {
    const allDocumentsVerified = (rocCase.documents ?? []).every((_: string, index: number) =>
      documentStatuses[`${rocCase.id}-${index}`]?.status === 'approved'
    );

    return (
      <div className="doc-card">
        <div className="doc-card-header">
          <div>
            <h3 className="doc-card-title">{rocCase.form} - {rocCase.frequency}</h3>
            <p className="doc-card-subtitle">Period: {rocCase.period}</p>
          </div>
          <span className={`status-badge ${getStatusColor(rocCase.status ?? '')}`}>
            {rocCase.status}
          </span>
        </div>

        <div className="doc-card-details">
          <div className="details-column">
            <div className="detail-row">
              <span className="detail-label">Due Date:</span>
              <span className="detail-value">{rocCase.dueDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Filing Date:</span>
                <span className="detail-value">{rocCase.dateOfFiling ?? ''}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Acknowledgment:</span>
              <span className="detail-value">{rocCase.acknowledgmentNo ?? ''}</span>
            </div>
          </div>
          <div className="details-column">
            <div className="detail-row">
              <span className="detail-label">Tax/Fees:</span>
              <span className="detail-value">{rocCase.taxFees}</span>
            </div>
            {rocCase.agmDate && (
              <div className="detail-row">
                <span className="detail-label">AGM Date:</span>
                <span className="detail-value">{rocCase.agmDate}</span>
              </div>
            )}
            {rocCase.eventDate && (
              <div className="detail-row">
                <span className="detail-label">Event Date:</span>
                <span className="detail-value">{rocCase.eventDate}</span>
              </div>
            )}
          </div>
        </div>

        <div className="doc-verification-section">
          <h4 className="verification-title">
            <FileText className="verification-icon" />
            Document Verification
          </h4>
          
          <div className="document-list">
            {(rocCase.documents ?? []).map((doc: string, index: number) => {
              const docStatus = documentStatuses[`${rocCase.id}-${index}`];

              return (
                <div key={index} className="document-item">
                  <div className="document-info">
                    {getDocumentStatusIcon(rocCase.id, index)}
                    <span className="document-name">{doc}</span>
                  </div>

                  <div className="document-actions">
                    <button className="action-btn view-btn">
                      <Eye className="action-icon" />
                    </button>
                    <button className="action-btn download-btn">
                      <Download className="action-icon" />
                    </button>

                    {!docStatus && (
                      <div className="approval-buttons">
                        <button
                          onClick={() => handleDocumentAction(rocCase.id, index, 'approved')}
                          className="btn btn-approve"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => {
                            const remarks = prompt('Enter rejection remarks:');
                            if (remarks !== null && remarks.trim() !== '') handleDocumentAction(rocCase.id, index, 'rejected', remarks);
                          }}
                          className="btn btn-reject"
                        >
                          Reject
                        </button>
                      </div>
                    )}

                    {docStatus && (
                      <span className={`status-small ${
                        docStatus.status === 'approved'
                          ? 'status-small-approved'
                          : 'status-small-rejected'
                      }`}>
                        {docStatus.status === 'approved' ? 'Approved' : 'Rejected'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {allDocumentsVerified && rocCase.status === 'In Progress' && (
            <div className="completion-banner">
              <div className="completion-content">
                <div className="completion-info">
                  <CheckCircle className="completion-icon" />
                  <span className="completion-text">All documents verified</span>
                </div>
                <button className="btn btn-complete">
                  Complete Filing Verification
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const styles = `
    .container {
      min-height: 100vh;
      background-color: #f5f5f5;
      padding: 24px;
      display: flex;
      justify-content: stretch;
      color: #000000;
    }

    .main-content {
      max-width: 1280px;
      margin: 0 auto;
    }

    .header-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 24px;
      margin-bottom: 24px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .back-btn {
      padding: 8px;
      background: none;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .back-btn:hover {
      background-color: #f5f5f5;
    }

    .client-info h1 {
      font-size: 24px;
      font-weight: bold;
      margin: 0 0 4px 0;
      color: #1f2937;
    }

    .client-info p {
      color: #6b7280;
      margin: 0;
    }

    .header-badges {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .status-badge {
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 500;
    }

    .status-completed {
      background-color: #dcfce7;
      color: #166534;
    }

    .status-in-progress {
      background-color: #fef3c7;
      color: #92400e;
    }

    .status-pending {
      background-color: #fecaca;
      color: #991b1b;
    }

    .status-default {
      background-color: #f3f4f6;
      color: #374151;
    }

    .priority-high {
      background-color: #fecaca;
      color: #991b1b;
    }

    .priority-medium {
      background-color: #fef3c7;
      color: #92400e;
    }

    .priority-low {
      background-color: #dcfce7;
      color: #166534;
    }

    .tabs-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }

    .tabs-nav {
      border-bottom: 1px solid #e5e7eb;
    }

    .tabs-list {
      display: flex;
      padding: 0 24px;
      gap: 32px;
    }

    .tab-button {
      padding: 16px 8px;
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      font-weight: 500;
      font-size: 14px;
      text-transform: capitalize;
      cursor: pointer;
      color: #6b7280;
      transition: all 0.2s;
    }

    .tab-button.active {
      border-bottom-color: #3b82f6;
      color: #2563eb;
    }

    .tab-button:hover:not(.active) {
      color: #374151;
    }

    .tabs-content {
      padding: 24px;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    @media (max-width: 768px) {
      .overview-grid {
        grid-template-columns: 1fr;
      }
    }

    .info-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-section h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
    }

    .info-label {
      color: #6b7280;
    }

    .info-value {
      font-weight: 500;
    }

    .documents-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .documents-header h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .documents-meta {
      font-size: 14px;
      color: #6b7280;
    }

    .doc-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 24px;
      margin-bottom: 24px;
    }

    .doc-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .doc-card-title {
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 4px 0;
    }

    .doc-card-subtitle {
      font-size: 14px;
      color: #6b7280;
      margin: 0;
    }

    .doc-card-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
      align-items: center;
    }

    @media (max-width: 768px) {
      .doc-card-details {
        grid-template-columns: 1fr;
      }
    }

    .details-column {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
    }

    .detail-label {
      font-size: 14px;
      color: #6b7280;
    }

    .detail-value {
      font-size: 14px;
      font-weight: 500;
    }

    .doc-verification-section {
      border-top: 1px solid #e5e7eb;
      padding-top: 16px;
    }

    .verification-title {
      font-weight: 500;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .verification-icon {
      width: 16px;
      height: 16px;
    }

    .document-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .document-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background-color: #f9fafb;
      border-radius: 8px;
      min-width: 600px;
    }

    .document-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .document-name {
      font-size: 14px;
      font-weight: 500;
    }

    .document-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .action-btn {
      padding: 4px;
      border: none;
      background: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .view-btn:hover {
      background-color: #dbeafe;
      color: #2563eb;
    }

    .download-btn:hover {
      background-color: #f3f4f6;
      color: #374151;
    }

    .action-icon {
      width: 16px;
      height: 16px;
    }

    .approval-buttons {
      display: flex;
      gap: 4px;
    }

    .btn {
      padding: 4px 12px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-approve {
      background-color: #16a34a;
      color: white;
    }

    .btn-approve:hover {
      background-color: #15803d;
    }

    .btn-reject {
      background-color: #dc2626;
      color: white;
    }

    .btn-reject:hover {
      background-color: #b91c1c;
    }

    .btn-complete {
      padding: 8px 16px;
      background-color: #16a34a;
      color: white;
      font-weight: 500;
      border-radius: 8px;
    }

    .btn-complete:hover {
      background-color: #15803d;
    }

    .status-small {
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 4px;
    }

    .status-small-approved {
      background-color: #dcfce7;
      color: #166534;
    }

    .status-small-rejected {
      background-color: #fecaca;
      color: #991b1b;
    }

    .completion-banner {
      margin-top: 16px;
      padding: 16px;
      background-color: #f0fdf4;
      border-radius: 8px;
    }

    .completion-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .completion-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .completion-icon {
      width: 20px;
      height: 20px;
      color: #16a34a;
    }

    .completion-text {
      font-size: 14px;
      font-weight: 500;
      color: #166534;
    }

    .timeline-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .timeline-section h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }

    .timeline-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .timeline-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border-radius: 8px;
    }

    .timeline-blue {
      background-color: #eff6ff;
    }

    .timeline-green {
      background-color: #f0fdf4;
    }

    .timeline-gray {
      background-color: #f9fafb;
    }

    .timeline-icon {
      width: 20px;
      height: 20px;
    }

    .timeline-icon.blue {
      color: #2563eb;
    }

    .timeline-icon.green {
      color: #16a34a;
    }

    .timeline-icon.gray {
      color: #6b7280;
    }

    .timeline-content p {
      margin: 0;
    }

    .timeline-content .timeline-title {
      font-weight: 500;
      margin-bottom: 4px;
    }

    .timeline-content .timeline-time {
      font-size: 14px;
      color: #6b7280;
      margin: 0;
    }

    .icon-gray {
      width: 16px;
      height: 16px;
      color: #9ca3af;
    }

    .icon-green {
      width: 16px;
      height: 16px;
      color: #16a34a;
    }

    .icon-red {
      width: 16px;
      height: 16px;
      color: #dc2626;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <div className="main-content">
          {/* Client Selector */}
<div style={{ marginBottom: '16px' }}>
  <button
    onClick={() => setSelectedClient('client1')}
    style={{
      marginRight: '8px',
      padding: '8px 16px',
      backgroundColor: selectedClient === 'client1' ? '#2563eb' : '#e5e7eb',
      color: selectedClient === 'client1' ? 'white' : 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Client 1
  </button>
  <button
    onClick={() => setSelectedClient('client2')}
    style={{
      marginRight: '8px',
      padding: '8px 16px',
      backgroundColor: selectedClient === 'client2' ? '#2563eb' : '#e5e7eb',
      color: selectedClient === 'client2' ? 'white' : 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Client 2
  </button>
  <button
    onClick={() => setSelectedClient('client3')}
    style={{
      marginRight: '8px',
      padding: '8px 16px',
      backgroundColor: selectedClient === 'client3' ? '#2563eb' : '#e5e7eb',
      color: selectedClient === 'client3' ? 'white' : 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Client 3
  </button>
  <button
    onClick={() => setSelectedClient('client4')}
    style={{
      padding: '8px 16px',
      backgroundColor: selectedClient === 'client4' ? '#2563eb' : '#e5e7eb',
      color: selectedClient === 'client4' ? 'white' : 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Client 4
  </button>
</div>

          {/* Header */}
          <div className="header-card">
            <div className="header-content">
              <div className="header-left">
                <button className="back-btn">
                  <ArrowLeft style={{width: 20, height: 20}} />
                </button>
                <div className="client-info">
                  <h1>{selectedClient === 'client1' ? clientData.name : selectedClient === 'client2' ? clientData2.name : selectedClient === 'client3' ? clientData3.name : clientData4.name}</h1>
                  <p>{selectedClient === 'client1' ? clientData.company : selectedClient === 'client2' ? clientData2.company : selectedClient === 'client3' ? clientData3.company : clientData4.company}</p>
                </div>
              </div>
              <div className="header-badges">
                <span className={`status-badge ${getStatusColor(selectedClient === 'client1' ? clientData.status : selectedClient === 'client2' ? clientData2.status : selectedClient === 'client3' ? clientData3.status : clientData4.status)}`}>
                  {selectedClient === 'client1' ? clientData.status : selectedClient === 'client2' ? clientData2.status : selectedClient === 'client3' ? clientData3.status : clientData4.status}
                </span>
                <span className={`status-badge ${
                  (selectedClient === 'client1' ? clientData.priority : selectedClient === 'client2' ? clientData2.priority : selectedClient === 'client3' ? clientData3.priority : clientData4.priority) === 'High' ? 'priority-high' : 
                  (selectedClient === 'client1' ? clientData.priority : selectedClient === 'client2' ? clientData2.priority : selectedClient === 'client3' ? clientData3.priority : clientData4.priority) === 'Medium' ? 'priority-medium' : 
                  'priority-low'
                }`}>
                  {selectedClient === 'client1' ? clientData.priority : selectedClient === 'client2' ? clientData2.priority : selectedClient === 'client3' ? clientData3.priority : clientData4.priority} Priority
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-card">
            <div className="tabs-nav">
              <div className="tabs-list">
                {['overview', 'documents', 'timeline'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="tabs-content">
              {activeTab === 'overview' && (
                <div className="overview-grid">
                  <div className="info-section">
                    <h3>Client Information</h3>
                    <div className="info-list">
                      <div className="info-item">
                        <span className="info-label">Client ID:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.id : selectedClient === 'client2' ? clientData2.id : selectedClient === 'client3' ? clientData3.id : clientData4.id}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.email : selectedClient === 'client2' ? clientData2.email : selectedClient === 'client3' ? clientData3.email : clientData4.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.phone : selectedClient === 'client2' ? clientData2.phone : selectedClient === 'client3' ? clientData3.phone : clientData4.phone}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">CIN:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.cin : selectedClient === 'client2' ? clientData2.cin : selectedClient === 'client3' ? clientData3.cin : clientData4.cin}</span>
                    </div>
                  </div>
                </div>

                  <div className="info-section">
                    <h3>Filing Details</h3>
                    <div className="info-list">
                      <div className="info-item">
                        <span className="info-label">Filing Type:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.filingType : selectedClient === 'client2' ? clientData2.filingType : selectedClient === 'client3' ? clientData3.filingType : clientData4.filingType}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Assigned Operator:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.assignedOperator : selectedClient === 'client2' ? clientData2.assignedOperator : selectedClient === 'client3' ? clientData3.assignedOperator : clientData4.assignedOperator}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Deadline:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.deadline : selectedClient === 'client2' ? clientData2.deadline : selectedClient === 'client3' ? clientData3.deadline : clientData4.deadline}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Amount:</span>
                      <span className="info-value">{selectedClient === 'client1' ? clientData.amount : selectedClient === 'client2' ? clientData2.amount : selectedClient === 'client3' ? clientData3.amount : clientData4.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
              )}

{activeTab === 'documents' && (
  <div>
    <div className="documents-header">
      <h3>Compliance Cases</h3>
      <div className="documents-meta">
        <span>Total Cases: {
          (selectedClient === 'client1' ? rocCases :
          selectedClient === 'client2' ? rocCases2 :
          selectedClient === 'client3' ? gstCases :
          tdsCases).length + additionalCases.length
        }</span>
      </div>
    </div>
    
    {[
      ...(selectedClient === 'client1' ? rocCases :
      selectedClient === 'client2' ? rocCases2 :
      selectedClient === 'client3' ? gstCases :
      tdsCases),
      ...additionalCases
    ].map((rocCase) => (
      <DocumentVerificationCard key={rocCase.id} rocCase={rocCase} />
    ))}
  </div>
)}

              {activeTab === 'timeline' && (
                <div className="timeline-section">
                  <h3>Activity Timeline</h3>
                  <div className="timeline-list">
                    <div className="timeline-item timeline-blue">
                      <Calendar className="timeline-icon blue" />
                      <div className="timeline-content">
                        <p className="timeline-title">Case assigned to {clientData.assignedOperator}</p>
                        <p className="timeline-time">2 hours ago</p>
                      </div>
                    </div>
                    <div className="timeline-item timeline-green">
                      <CheckCircle className="timeline-icon green" />
                      <div className="timeline-content">
                        <p className="timeline-title">Documents uploaded by client</p>
                        <p className="timeline-time">1 day ago</p>
                      </div>
                    </div>
                    <div className="timeline-item timeline-gray">
                      <FileText className="timeline-icon gray" />
                      <div className="timeline-content">
                        <p className="timeline-title">Case created</p>
                        <p className="timeline-time">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetailView;