# V2WorkflowInstanceHistoryStageOutput

## Example Usage

```typescript
import { Scheme, V2PaymentStatus, V2PaymentType, V2WorkflowInstanceHistoryStageOutput } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WorkflowInstanceHistoryStageOutput = {
  createTransaction: {
    data: [
      {
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
        timestamp: new Date("2023-08-11T22:07:27.220Z"),
        txid: BigInt("176104"),
      },
    ],
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
          date: new Date("2023-12-17T12:12:43.741Z"),
          raw: {},
          status: V2PaymentStatus.Succeeded,
        },
      ],
      asset: "USD",
      connectorID: "<id>",
      createdAt: new Date("2024-08-14T07:58:15.099Z"),
      destinationAccountID: "<id>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: Scheme.Visa,
      sourceAccountID: "<id>",
      status: V2PaymentStatus.Terminated,
      type: V2PaymentType.Transfer,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2024-08-13T01:14:36.260Z"),
          id: "93d8bf6e-0094-4345-ab9c-dd66ea185f09",
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
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `createTransaction`                                                                                         | [shared.V2ActivityCreateTransactionOutput](../../../sdk/models/shared/v2activitycreatetransactionoutput.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `debitWallet`                                                                                               | [shared.V2ActivityDebitWalletOutput](../../../sdk/models/shared/v2activitydebitwalletoutput.md)             | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getAccount`                                                                                                | [shared.V2ActivityGetAccountOutput](../../../sdk/models/shared/v2activitygetaccountoutput.md)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getPayment`                                                                                                | [shared.V2ActivityGetPaymentOutput](../../../sdk/models/shared/v2activitygetpaymentoutput.md)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `getWallet`                                                                                                 | [shared.V2ActivityGetWalletOutput](../../../sdk/models/shared/v2activitygetwalletoutput.md)                 | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `listWallets`                                                                                               | [shared.V2ListWalletsResponse](../../../sdk/models/shared/v2listwalletsresponse.md)                         | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |