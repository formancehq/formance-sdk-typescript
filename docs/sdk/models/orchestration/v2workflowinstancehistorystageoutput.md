# V2WorkflowInstanceHistoryStageOutput

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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                           | [orchestration.V2CreateTransactionResponse](../../../sdk/models/orchestration/v2createtransactionresponse.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `debitWallet`                                                                                                 | [orchestration.V2DebitWalletResponse](../../../sdk/models/orchestration/v2debitwalletresponse.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `getAccount`                                                                                                  | [orchestration.V2AccountResponse](../../../sdk/models/orchestration/v2accountresponse.md)                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `getPayment`                                                                                                  | [orchestration.V2PaymentResponse](../../../sdk/models/orchestration/v2paymentresponse.md)                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `getWallet`                                                                                                   | [orchestration.V2GetWalletResponse](../../../sdk/models/orchestration/v2getwalletresponse.md)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `listWallets`                                                                                                 | [orchestration.V2ListWalletsResponse](../../../sdk/models/orchestration/v2listwalletsresponse.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |