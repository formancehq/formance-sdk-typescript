# WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import { WorkflowInstanceHistoryStageOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistoryStageOutput = {
  createTransaction: {
    data: {
      id: 194985n,
      metadata: {
        "admin": "true",
      },
      postings: [],
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2025-09-30T06:28:56.548Z"),
    },
  },
  getAccount: {
    data: {
      address: "users:001",
      effectiveVolumes: {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
        "EUR": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
      metadata: {
        "admin": "true",
      },
      volumes: {
        "USD": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
        "EUR": {
          balance: 90n,
          input: 100n,
          output: 10n,
        },
      },
    },
  },
  getPayment: {
    data: {
      adjustments: [],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2024-12-15T14:43:43.030Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: 100n,
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: "ach",
      sourceAccountID: "<id>",
      status: "ACTIVE",
      type: "OTHER",
    },
  },
  listWallets: {
    cursor: {
      data: [],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  revertTransaction: {
    data: {
      id: 194985n,
      metadata: {
        "admin": "true",
      },
      postings: [],
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2025-09-30T06:28:56.548Z"),
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                       | [orchestration.CreateTransactionResponse](../../../sdk/models/orchestration/createtransactionresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `debitWallet`                                                                                             | [orchestration.DebitWalletResponse](../../../sdk/models/orchestration/debitwalletresponse.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getAccount`                                                                                              | [orchestration.AccountResponse](../../../sdk/models/orchestration/accountresponse.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getPayment`                                                                                              | [orchestration.PaymentResponse](../../../sdk/models/orchestration/paymentresponse.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getWallet`                                                                                               | [orchestration.GetWalletResponse](../../../sdk/models/orchestration/getwalletresponse.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `listWallets`                                                                                             | [orchestration.ListWalletsResponse](../../../sdk/models/orchestration/listwalletsresponse.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `revertTransaction`                                                                                       | [orchestration.CreateTransactionResponse](../../../sdk/models/orchestration/createtransactionresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |