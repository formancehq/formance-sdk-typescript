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
      id: BigInt("299643"),
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
      timestamp: new Date("2022-01-09T15:23:00.369Z"),
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
          date: new Date("2023-05-20T09:37:09.099Z"),
          raw: {},
          status: OrchestrationPaymentStatus.Terminated,
        },
      ],
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-01-27T21:10:07.451Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: OrchestrationPaymentScheme.Sepa,
      sourceAccountID: "<value>",
      status: OrchestrationPaymentStatus.Failed,
      type: OrchestrationPaymentType.Other,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2023-01-31T19:43:46.202Z"),
          id: "1862065e-904f-43b1-994b-8abf603a79f9",
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
      id: BigInt("833819"),
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
      timestamp: new Date("2024-11-21T04:42:37.240Z"),
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