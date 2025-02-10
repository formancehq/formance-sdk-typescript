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
      id: BigInt("852689"),
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
      timestamp: new Date("2023-02-05T22:08:14.307Z"),
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
          date: new Date("2023-09-25T14:18:23.825Z"),
          raw: {},
          status: OrchestrationPaymentStatus.Terminated,
        },
      ],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2023-07-26T20:24:43.477Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: OrchestrationPaymentScheme.Ach,
      sourceAccountID: "<id>",
      status: OrchestrationPaymentStatus.Succeeded,
      type: OrchestrationPaymentType.Transfer,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2025-12-13T06:53:53.078Z"),
          id: "2e12b196-becd-4048-b634-f450d234e3cc",
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
      id: BigInt("115561"),
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
      timestamp: new Date("2023-08-27T03:18:21.918Z"),
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