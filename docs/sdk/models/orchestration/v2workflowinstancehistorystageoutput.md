# V2WorkflowInstanceHistoryStageOutput

Result an activity returned, keyed by activity name

## Example Usage

```typescript
import { V2WorkflowInstanceHistoryStageOutput } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStageOutput = {
  createTransaction: {
    data: [
      {
        metadata: {
          "admin": "true",
        },
        postings: [],
        reference: "ref:001",
        timestamp: new Date("2026-03-28T10:26:16.538Z"),
        txid: 910526n,
      },
    ],
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
      createdAt: new Date("2026-06-20T02:05:25.894Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: 100n,
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: "ach debit",
      sourceAccountID: "<id>",
      status: "SUCCEEDED",
      type: "PAY-IN",
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
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                                       | [orchestration.V2ActivityCreateTransactionOutput](../../../sdk/models/orchestration/v2activitycreatetransactionoutput.md) | :heavy_minus_sign:                                                                                                        | Result of the activity that writes a transaction to a ledger                                                              |
| `debitWallet`                                                                                                             | [orchestration.V2ActivityDebitWalletOutput](../../../sdk/models/orchestration/v2activitydebitwalletoutput.md)             | :heavy_minus_sign:                                                                                                        | Result of the activity that debits a wallet                                                                               |
| `getAccount`                                                                                                              | [orchestration.V2ActivityGetAccountOutput](../../../sdk/models/orchestration/v2activitygetaccountoutput.md)               | :heavy_minus_sign:                                                                                                        | Result of the activity that reads a ledger account                                                                        |
| `getPayment`                                                                                                              | [orchestration.V2ActivityGetPaymentOutput](../../../sdk/models/orchestration/v2activitygetpaymentoutput.md)               | :heavy_minus_sign:                                                                                                        | Result of the activity that reads a payment                                                                               |
| `getWallet`                                                                                                               | [orchestration.V2ActivityGetWalletOutput](../../../sdk/models/orchestration/v2activitygetwalletoutput.md)                 | :heavy_minus_sign:                                                                                                        | Result of the activity that reads a wallet                                                                                |
| `listWallets`                                                                                                             | [orchestration.V2ListWalletsResponse](../../../sdk/models/orchestration/v2listwalletsresponse.md)                         | :heavy_minus_sign:                                                                                                        | A page of wallets                                                                                                         |