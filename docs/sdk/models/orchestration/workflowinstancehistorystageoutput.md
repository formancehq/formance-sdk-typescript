# WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import { PaymentScheme, PaymentStatus, PaymentType, WorkflowInstanceHistoryStageOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistoryStageOutput = {
  accountResponse: {
    account: {
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
      volumes1: {
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
      address: "users:001",
      metadata: {
        "admin": "true",
      },
    },
  },
  createTransactionResponse: {
    transaction: {
      metadata: {
        "admin": "true",
      },
      id: 405193n,
      postings: [],
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2024-09-01T21:53:30.576Z"),
    },
  },
  createTransactionResponse1: {
    transaction: {
      metadata: {
        "admin": "true",
      },
      id: 405193n,
      postings: [],
      reference: "ref:001",
      reverted: true,
      timestamp: new Date("2024-09-01T21:53:30.576Z"),
    },
  },
  listWalletsResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2025-06-28T01:10:46.423Z"),
          id: "547d3f30-b54f-4b7e-af88-9d5b3570f784",
          ledger: "<value>",
          metadata: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
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
  paymentResponse: {
    payment: {
      paymentMetadata: {},
      paymentStatus: PaymentStatus.Cancelled,
      adjustments: [],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2026-05-29T13:33:48.219Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: 100n,
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.SepaCredit,
      sourceAccountID: "<id>",
      type: PaymentType.Transfer,
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `accountResponse`                                                                                         | [orchestration.AccountResponse](../../../sdk/models/orchestration/accountresponse.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `createTransactionResponse`                                                                               | [orchestration.CreateTransactionResponse](../../../sdk/models/orchestration/createtransactionresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `createTransactionResponse1`                                                                              | [orchestration.CreateTransactionResponse](../../../sdk/models/orchestration/createtransactionresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `debitWalletResponse`                                                                                     | [orchestration.DebitWalletResponse](../../../sdk/models/orchestration/debitwalletresponse.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getWalletResponse`                                                                                       | [orchestration.GetWalletResponse](../../../sdk/models/orchestration/getwalletresponse.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `listWalletsResponse`                                                                                     | [orchestration.ListWalletsResponse](../../../sdk/models/orchestration/listwalletsresponse.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `paymentResponse`                                                                                         | [orchestration.PaymentResponse](../../../sdk/models/orchestration/paymentresponse.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |