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
      id: BigInt("638390"),
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
      timestamp: new Date("2022-11-04T19:43:41.328Z"),
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
          date: new Date("2024-11-04T19:30:24.907Z"),
          raw: {},
          status: OrchestrationPaymentStatus.Succeeded,
        },
      ],
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-12-28T07:08:38.576Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: OrchestrationPaymentScheme.Ach,
      sourceAccountID: "<value>",
      status: OrchestrationPaymentStatus.Pending,
      type: OrchestrationPaymentType.Payout,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2022-08-31T10:55:17.874Z"),
          id: "a16485b0-a34c-4f5d-a1ac-26e1096ce467",
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
      id: BigInt("983854"),
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
      timestamp: new Date("2024-02-04T06:34:29.704Z"),
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