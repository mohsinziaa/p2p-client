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
   status: 'approved' | 'pending' | 'hold' | 'rejected';
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
     status: 'hold'
   },
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
    status: 'hold'
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
      reqNumber: 'PR-1004',
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
      reqNumber: 'PR-1011',
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
      status: 'hold'
    },
    {
      reqNumber: 'PR-1012',
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
      reqNumber: 'PR-1013',
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
       reqNumber: 'PR-1014',
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
      reqNumber: 'PR-1021',
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
      status: 'hold'
    },
    {
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
      reqNumber: 'PR-1022',
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
      reqNumber: 'PR-1023',
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
       reqNumber: 'PR-1024',
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
 ];