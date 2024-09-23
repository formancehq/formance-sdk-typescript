# V2WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import { Scheme, V2PaymentStatus, V2PaymentType, V2WorkflowInstanceHistoryStageOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WorkflowInstanceHistoryStageOutput = {
  createTransaction: {
    data: [
      {
        metadata: {
          "admin": "true",
        },
        postings: [
          {
            amount: BigInt("100"),
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        timestamp: new Date("2022-12-15T13:25:30.391Z"),
        txid: BigInt("958068"),
      },
    ],
  },
  getAccount: {
    data: {
      address: "users:001",
      effectiveVolumes: {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
        "EUR": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      metadata: {
        "admin": "true",
      },
      volumes: {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
        "EUR": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
    },
  },
  getPayment: {
    data: {
      adjustments: [
        {
          absolute: false,
          amount: BigInt("100"),
          date: new Date("2024-11-24T10:40:28.013Z"),
          raw: {},
          status: V2PaymentStatus.Failed,
        },
      ],
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-11-08T18:38:53.264Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: Scheme.Other,
      sourceAccountID: "<value>",
      status: V2PaymentStatus.Cancelled,
      type: V2PaymentType.Other,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2022-12-10T16:41:14.824Z"),
          id: "537fe10e-83aa-4140-8323-a012544cf8f6",
          ledger: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                         | [shared.V2ActivityCreateTransactionOutput](../../../sdk/models/shared/v2activitycreatetransactionoutput.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `debitWallet`                                                                                               | [shared.V2ActivityDebitWalletOutput](../../../sdk/models/shared/v2activitydebitwalletoutput.md)             | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getAccount`                                                                                                | [shared.V2ActivityGetAccountOutput](../../../sdk/models/shared/v2activitygetaccountoutput.md)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getPayment`                                                                                                | [shared.V2ActivityGetPaymentOutput](../../../sdk/models/shared/v2activitygetpaymentoutput.md)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getWallet`                                                                                                 | [shared.V2ActivityGetWalletOutput](../../../sdk/models/shared/v2activitygetwalletoutput.md)                 | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `listWallets`                                                                                               | [shared.V2ListWalletsResponse](../../../sdk/models/shared/v2listwalletsresponse.md)                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |