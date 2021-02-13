export interface DadosPagamento {
    installments: number
    value: number,
    shippingAmount: number,
    card: {
      number: string,
      exp_month: string,
      exp_year: string,
      security_code: string,
      holder: {
        name: string
      }
    },
    split: [
      {
        partnerDocumentNumber: string, 
        value: number
      }
    ],
    client: {
      fullName: string,
      email: string,
      documentNumber: string,
      dateOfBirth: string,
      ddd: string,
      phoneNumber: string,
      address: {
        street: string,
        number: string,
        complement: string,
        postalCode: string,
        district: string,
        city: string,
        federationUnit: string
      },
      shippingAddress: {
        street: string,
        number: string,
        complement: string,
        postalCode: string,
        district: string,
        city: string,
        federationUnit: string
      }
    },
    shoppingCart: [
      {
        sku: string,
        product_code: number,
        category: string,
        name: string,
        description: string,
        unitCost: number,
        quantity: number,
        discount: number,
        createdAt: string,
      }
    ]
}