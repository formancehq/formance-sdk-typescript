# V2WorkflowInstanceHistoryStage

## Example Usage

```typescript
import { Scheme, V2PaymentStatus, V2PaymentType, V2WorkflowInstanceHistoryStage } from "@formance/formance-sdk/sdk/models/shared";

let value: V2WorkflowInstanceHistoryStage = {
  attempt: 245990,
  input: {
    createTransaction: {
      data: {
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
        script: {
          plain: "vars {\n"
            + "account $user\n"
            + "}\n"
            + "send [COIN 10] (\n"
            + "	source = @world\n"
            + "	destination = $user\n"
            + ")\n"
            + "",
          vars: {
            "user": "users:042",
          },
        },
      },
    },
    creditWallet: {
      data: {
        amount: {
          amount: BigInt("100"),
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        sources: [],
      },
    },
    debitWallet: {
      data: {
        amount: {
          amount: BigInt("100"),
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        pending: true,
      },
    },
    stripeTransfer: {
      amount: BigInt("100"),
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
    },
  },
  name: "<value>",
  output: {
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
          timestamp: new Date("2024-10-01T02:51:40.989Z"),
          txid: BigInt("258036"),
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
            date: new Date("2024-06-02T19:56:17.254Z"),
            raw: {},
            status: V2PaymentStatus.Cancelled,
          },
        ],
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2023-09-10T12:26:59.523Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: Scheme.SepaDebit,
        sourceAccountID: "<id>",
        status: V2PaymentStatus.Failed,
        type: V2PaymentType.Transfer,
      },
    },
    listWallets: {
      cursor: {
        data: [
          {
            createdAt: new Date("2025-12-04T07:07:12.134Z"),
            id: "abf65023-2c8a-4d35-8b60-6e65fa51cbe3",
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
  },
  startedAt: new Date("2025-03-04T14:00:13.445Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `attempt`                                                                                                         | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `error`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `input`                                                                                                           | [shared.V2WorkflowInstanceHistoryStageInput](../../../sdk/models/shared/v2workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `lastFailure`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `nextExecution`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `output`                                                                                                          | [shared.V2WorkflowInstanceHistoryStageOutput](../../../sdk/models/shared/v2workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `startedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `terminated`                                                                                                      | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `terminatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |