# WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import {
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
  WorkflowInstanceHistoryStageOutput,
} from "@formance/formance-sdk/sdk/models/shared";

let value: WorkflowInstanceHistoryStageOutput = {
  createTransaction: {
    data: {
      id: BigInt("196451"),
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
      reverted: false,
      timestamp: new Date("2025-01-05T23:51:52.329Z"),
    },
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
          date: new Date("2025-07-12T21:34:10.519Z"),
          raw: {},
          status: OrchestrationPaymentStatus.Pending,
        },
      ],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2024-12-05T12:17:59.943Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: OrchestrationPaymentScheme.SepaDebit,
      sourceAccountID: "<id>",
      status: OrchestrationPaymentStatus.Cancelled,
      type: OrchestrationPaymentType.Payout,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2024-06-03T16:57:26.286Z"),
          id: "82bd040f-af8c-4556-ba5e-f031037d37ea",
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
  revertTransaction: {
    data: {
      id: BigInt("550994"),
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
      reverted: false,
      timestamp: new Date("2025-12-10T14:11:23.041Z"),
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                       | [shared.ActivityCreateTransactionOutput](../../../sdk/models/shared/activitycreatetransactionoutput.md)   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `debitWallet`                                                                                             | [shared.ActivityDebitWalletOutput](../../../sdk/models/shared/activitydebitwalletoutput.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getAccount`                                                                                              | [shared.ActivityGetAccountOutput](../../../sdk/models/shared/activitygetaccountoutput.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getPayment`                                                                                              | [shared.ActivityGetPaymentOutput](../../../sdk/models/shared/activitygetpaymentoutput.md)                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `getWallet`                                                                                               | [shared.ActivityGetWalletOutput](../../../sdk/models/shared/activitygetwalletoutput.md)                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `listWallets`                                                                                             | [shared.OrchestrationListWalletsResponse](../../../sdk/models/shared/orchestrationlistwalletsresponse.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `revertTransaction`                                                                                       | [shared.ActivityRevertTransactionOutput](../../../sdk/models/shared/activityreverttransactionoutput.md)   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |