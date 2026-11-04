# WorkflowInstanceHistoryStageOutput

Result an activity returned, keyed by activity name

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

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                                   | [orchestration.ActivityCreateTransactionOutput](../../../sdk/models/orchestration/activitycreatetransactionoutput.md) | :heavy_minus_sign:                                                                                                    | Result of the activity that writes a transaction to a ledger                                                          |
| `debitWallet`                                                                                                         | [orchestration.ActivityDebitWalletOutput](../../../sdk/models/orchestration/activitydebitwalletoutput.md)             | :heavy_minus_sign:                                                                                                    | Result of the activity that debits a wallet                                                                           |
| `getAccount`                                                                                                          | [orchestration.ActivityGetAccountOutput](../../../sdk/models/orchestration/activitygetaccountoutput.md)               | :heavy_minus_sign:                                                                                                    | Result of the activity that reads a ledger account                                                                    |
| `getPayment`                                                                                                          | [orchestration.ActivityGetPaymentOutput](../../../sdk/models/orchestration/activitygetpaymentoutput.md)               | :heavy_minus_sign:                                                                                                    | Result of the activity that reads a payment                                                                           |
| `getWallet`                                                                                                           | [orchestration.ActivityGetWalletOutput](../../../sdk/models/orchestration/activitygetwalletoutput.md)                 | :heavy_minus_sign:                                                                                                    | Result of the activity that reads a wallet                                                                            |
| `listWallets`                                                                                                         | [orchestration.ListWalletsResponse](../../../sdk/models/orchestration/listwalletsresponse.md)                         | :heavy_minus_sign:                                                                                                    | A page of wallets                                                                                                     |
| `revertTransaction`                                                                                                   | [orchestration.ActivityRevertTransactionOutput](../../../sdk/models/orchestration/activityreverttransactionoutput.md) | :heavy_minus_sign:                                                                                                    | Result of the activity that reverts a ledger transaction                                                              |