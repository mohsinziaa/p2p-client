// /components/request-table/data.ts

export interface RequestLine {
  requestNumber: string;
  itemId: string;
  itemName: string;
  remarks: string;
  quantity: number;
  requestItemStatus: 'approved' | 'pending' | 'hold' | 'rejected';
}

export interface RequestHeader {
  requestNumber: string;
  createdDate: string;
  createdBy: string;
  siteId: string;
  requestPriority: 'normal' | 'urgent';
  requestStatus: 'approved' | 'pending' | 'hold' | 'rejected' | 'semi-approved';
  remarks: string;
  erpStatus: 'request' | 'quotation' | 'purchase-order' | 'mrn' | 'invoiced' | 'paid';
  requestLines: RequestLine[];
}

export const requestHeaders: RequestHeader[] = [
  {
    requestNumber: 'REQ-1001',
    createdDate: '2023-05-15',
    createdBy: 'John Doe',
    siteId: 'SITE-001',
    requestPriority: 'urgent',
    requestStatus: 'hold',
    remarks: 'Urgent request for new office setup',
    erpStatus: 'request',
    requestLines: [
      {
        requestNumber: 'REQ-1001',
        itemId: 'ITEM-001',
        itemName: 'Laptop',
        remarks: 'Need for new hires',
        quantity: 5,
        requestItemStatus: 'pending'
      },
      {
        requestNumber: 'REQ-1001',
        itemId: 'ITEM-002',
        itemName: 'Monitor',
        remarks: 'Standard 24-inch',
        quantity: 5,
        requestItemStatus: 'approved'
      }
    ]
  },
  {
    requestNumber: 'REQ-1002',
    createdDate: '2023-05-16',
    createdBy: 'Jane Smith',
    siteId: 'SITE-002',
    requestPriority: 'normal',
    requestStatus: 'approved',
    remarks: 'Regular office supplies',
    erpStatus: 'purchase-order',
    requestLines: [
      {
        requestNumber: 'REQ-1002',
        itemId: 'ITEM-003',
        itemName: 'Desk Chair JBDJKSAB DASJBDKSAJB DASJBDKJSABD',
        remarks: 'Ergonomic',
        quantity: 10,
        requestItemStatus: 'approved'
      }
    ]
  },
  {
    requestNumber: 'REQ-1003',
    createdDate: '2023-05-17',
    createdBy: 'Mike Johnson',
    siteId: 'SITE-001',
    requestPriority: 'normal',
    requestStatus: 'rejected',
    remarks: 'Rejected by finance',
    erpStatus: 'mrn',
    requestLines: [
      {
        requestNumber: 'REQ-1003',
        itemId: 'ITEM-004',
        itemName: 'Printer',
        remarks: 'Color laser',
        quantity: 2,
        requestItemStatus: 'rejected'
      }
    ]
  },
  {
    requestNumber: 'REQ-1004',
    createdDate: '2023-05-18',
    createdBy: 'Sarah Williams',
    siteId: 'SITE-003',
    requestPriority: 'urgent',
    requestStatus: 'semi-approved',
    remarks: 'Partial approval',
    erpStatus: 'quotation',
    requestLines: [
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-005',
        itemName: 'Projector',
        remarks: 'Conference room',
        quantity: 1,
        requestItemStatus: 'approved'
      },
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-006',
        itemName: 'Whiteboard',
        remarks: 'Large size',
        quantity: 2,
        requestItemStatus: 'hold'
      }
    ]
  },
  {
    requestNumber: 'REQ-1004',
    createdDate: '2023-05-18',
    createdBy: 'Sarah Williams',
    siteId: 'SITE-003',
    requestPriority: 'urgent',
    requestStatus: 'pending',
    remarks: 'Partial approval',
    erpStatus: 'invoiced',
    requestLines: [
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-005',
        itemName: 'Projector',
        remarks: 'Conference room',
        quantity: 1,
        requestItemStatus: 'approved'
      },
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-006',
        itemName: 'Whiteboard',
        remarks: 'Large size',
        quantity: 2,
        requestItemStatus: 'hold'
      }
    ]
  },
  {
    requestNumber: 'REQ-1001',
    createdDate: '2023-05-15',
    createdBy: 'John Doe',
    siteId: 'SITE-001',
    requestPriority: 'urgent',
    requestStatus: 'hold',
    remarks: 'Urgent request for new office setup',
    erpStatus: 'paid',
    requestLines: [
      {
        requestNumber: 'REQ-1001',
        itemId: 'ITEM-001',
        itemName: 'Laptop',
        remarks: 'Need for new hires',
        quantity: 5,
        requestItemStatus: 'pending'
      },
      {
        requestNumber: 'REQ-1001',
        itemId: 'ITEM-002',
        itemName: 'Monitor',
        remarks: 'Standard 24-inch',
        quantity: 5,
        requestItemStatus: 'approved'
      }
    ]
  },
  {
    requestNumber: 'REQ-1002',
    createdDate: '2023-05-16',
    createdBy: 'Jane Smith',
    siteId: 'SITE-002',
    requestPriority: 'normal',
    requestStatus: 'approved',
    remarks: 'Regular office supplies',
    erpStatus: 'purchase-order',
    requestLines: [
      {
        requestNumber: 'REQ-1002',
        itemId: 'ITEM-003',
        itemName: 'Desk Chair',
        remarks: 'Ergonomic',
        quantity: 10,
        requestItemStatus: 'approved'
      }
    ]
  },
  {
    requestNumber: 'REQ-1003',
    createdDate: '2023-05-17',
    createdBy: 'Mike Johnson',
    siteId: 'SITE-001',
    requestPriority: 'normal',
    requestStatus: 'rejected',
    remarks: 'Rejected by finance',
    erpStatus: 'request',
    requestLines: [
      {
        requestNumber: 'REQ-1003',
        itemId: 'ITEM-004',
        itemName: 'Printer',
        remarks: 'Color laser',
        quantity: 2,
        requestItemStatus: 'rejected'
      }
    ]
  },
  {
    requestNumber: 'REQ-1004',
    createdDate: '2023-05-18',
    createdBy: 'Sarah Williams',
    siteId: 'SITE-003',
    requestPriority: 'urgent',
    requestStatus: 'semi-approved',
    remarks: 'Partial approval',
    erpStatus: 'quotation',
    requestLines: [
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-005',
        itemName: 'Projector',
        remarks: 'Conference room',
        quantity: 1,
        requestItemStatus: 'approved'
      },
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-006',
        itemName: 'Whiteboard',
        remarks: 'Large size',
        quantity: 2,
        requestItemStatus: 'hold'
      }
    ]
  },
  {
    requestNumber: 'REQ-1004',
    createdDate: '2023-05-18',
    createdBy: 'Sarah Williams',
    siteId: 'SITE-003',
    requestPriority: 'urgent',
    requestStatus: 'pending',
    remarks: 'Partial approval',
    erpStatus: 'quotation',
    requestLines: [
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-005',
        itemName: 'Projector',
        remarks: 'Conference room',
        quantity: 1,
        requestItemStatus: 'approved'
      },
      {
        requestNumber: 'REQ-1004',
        itemId: 'ITEM-006',
        itemName: 'Whiteboard',
        remarks: 'Large size',
        quantity: 2,
        requestItemStatus: 'hold'
      }
    ]
  },
];