// /components/request-table/data.ts

export interface Item {
   name: string;
   quantity: number;
   price: number;
   category: string;
   supplier: string;
   deliveryDate: string;
   notes: string;
 }
 
 export interface PurchaseRequest {
   reqNumber: string;
   site: string;
   dateCreated: string;
   generatedBy: string;
   items: Item[];
   status: 'approved' | 'pending' | 'rejected';
 }
 
 export const purchaseRequests: PurchaseRequest[] = [
   {
     reqNumber: 'PR-1001',
     site: 'Main Office',
     dateCreated: '2023-05-15',
     generatedBy: 'John Doe',
     items: [
       { 
         name: 'Laptop', 
         quantity: 5, 
         price: 1200,
         category: 'Electronics',
         supplier: 'Tech Corp',
         deliveryDate: '2023-05-20',
         notes: 'Urgent'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
     ],
     status: 'approved'
   },
   {
     reqNumber: 'PR-1002',
     site: 'Main Office',
     dateCreated: '2023-05-15',
     generatedBy: 'John Doe',
     items: [
       { 
         name: 'Laptop', 
         quantity: 5, 
         price: 1200,
         category: 'Electronics',
         supplier: 'Tech Corp',
         deliveryDate: '2023-05-20',
         notes: 'Urgent'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
     ],
     status: 'pending'
   },
   {
     reqNumber: 'PR-1003',
     site: 'Main Office',
     dateCreated: '2023-05-15',
     generatedBy: 'John Doe',
     items: [
       { 
         name: 'Laptop', 
         quantity: 5, 
         price: 1200,
         category: 'Electronics',
         supplier: 'Tech Corp',
         deliveryDate: '2023-05-20',
         notes: 'Urgent'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
     ],
     status: 'rejected'
   },    
   {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },   
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },   
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },  
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    }, 
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
      ],
      status: 'rejected'
    },
    {
      reqNumber: 'PR-1003',
      site: 'Main Office',
      dateCreated: '2023-05-15',
      generatedBy: 'John Doe',
      items: [
        { 
          name: 'Laptop', 
          quantity: 5, 
          price: 1200,
          category: 'Electronics',
          supplier: 'Tech Corp',
          deliveryDate: '2023-05-20',
          notes: 'Urgent'
        },
        { 
          name: 'Monitor', 
          quantity: 5, 
          price: 300,
          category: 'Electronics',
          supplier: 'Display Inc',
          deliveryDate: '2023-05-22',
          notes: 'Standard delivery'
        },
        { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
       { 
         name: 'Monitor', 
         quantity: 5, 
         price: 300,
         category: 'Electronics',
         supplier: 'Display Inc',
         deliveryDate: '2023-05-22',
         notes: 'Standard delivery'
       },
  ],
      status: 'rejected'
    },   
 ];