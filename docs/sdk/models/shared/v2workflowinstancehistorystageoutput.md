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
        timestamp: new Date("2022-02-13T10:02:48.165Z"),
        txid: BigInt("434156"),
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
          date: new Date("2022-03-07T16:46:29.387Z"),
          raw: {},
          status: V2PaymentStatus.Failed,
        },
      ],
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-03-08T22:36:35.592Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {},
      raw: {},
      reference: "<value>",
      scheme: Scheme.SepaCredit,
      sourceAccountID: "<value>",
      status: V2PaymentStatus.Cancelled,
      type: V2PaymentType.PayIn,
    },
  },
  listWallets: {
    cursor: {
      data: [
        {
          createdAt: new Date("2024-03-21T21:54:23.935Z"),
          id: "6e3ab884-5f05-497a-a0ff-2a54a31e9476",
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