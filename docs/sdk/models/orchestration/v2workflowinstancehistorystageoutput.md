# V2WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import {
  V2PaymentScheme,
  V2PaymentStatus,
  V2PaymentType,
  V2WorkflowInstanceHistoryStageOutput,
} from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStageOutput = {
  v2AccountResponse: {
    v2Account: {
      v2Volumes: {
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
      v2Volumes1: {
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
  v2CreateTransactionResponse: {
    data: [],
  },
  v2ListWalletsResponse: {
    v2Cursor: {
      data: [
        {
          createdAt: new Date("2024-11-18T18:11:54.712Z"),
          id: "be6dedcb-1035-4cf1-9638-36083616f1c8",
          ledger: "<value>",
          metadata: {},
          name: "<value>",
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  v2PaymentResponse: {
    v2Payment: {
      v2PaymentMetadata: {},
      v2PaymentStatus: V2PaymentStatus.Failed,
      adjustments: [],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2026-02-11T04:04:45.176Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: 100n,
      raw: {},
      reference: "<value>",
      scheme: V2PaymentScheme.AchDebit,
      sourceAccountID: "<id>",
      type: V2PaymentType.Transfer,
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `v2AccountResponse`                                                                                           | [orchestration.V2AccountResponse](../../../sdk/models/orchestration/v2accountresponse.md)                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `v2CreateTransactionResponse`                                                                                 | [orchestration.V2CreateTransactionResponse](../../../sdk/models/orchestration/v2createtransactionresponse.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `v2DebitWalletResponse`                                                                                       | [orchestration.V2DebitWalletResponse](../../../sdk/models/orchestration/v2debitwalletresponse.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `v2GetWalletResponse`                                                                                         | [orchestration.V2GetWalletResponse](../../../sdk/models/orchestration/v2getwalletresponse.md)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `v2ListWalletsResponse`                                                                                       | [orchestration.V2ListWalletsResponse](../../../sdk/models/orchestration/v2listwalletsresponse.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `v2PaymentResponse`                                                                                           | [orchestration.V2PaymentResponse](../../../sdk/models/orchestration/v2paymentresponse.md)                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |