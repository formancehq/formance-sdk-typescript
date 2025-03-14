# WorkflowInstanceHistoryStage

## Example Usage

```typescript
import {
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
  WorkflowInstanceHistoryStage,
} from "@formance/formance-sdk/sdk/models/shared";

let value: WorkflowInstanceHistoryStage = {
  attempt: 490966,
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
      data: {
        id: BigInt("717560"),
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
        timestamp: new Date("2025-03-20T00:20:17.729Z"),
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
            date: new Date("2025-09-20T12:25:17.293Z"),
            raw: {},
            status: OrchestrationPaymentStatus.Succeeded,
          },
        ],
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2023-12-07T18:42:45.808Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: OrchestrationPaymentScheme.SepaCredit,
        sourceAccountID: "<id>",
        status: OrchestrationPaymentStatus.Succeeded,
        type: OrchestrationPaymentType.PayIn,
      },
    },
    listWallets: {
      cursor: {
        data: [
          {
            createdAt: new Date("2023-08-01T14:44:02.184Z"),
            id: "74d95dcf-d62d-405e-8fab-088513569b55",
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
        id: BigInt("40874"),
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
        timestamp: new Date("2023-10-10T13:44:30.649Z"),
      },
    },
  },
  startedAt: new Date("2025-03-22T07:24:15.908Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `attempt`                                                                                                     | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `error`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `input`                                                                                                       | [shared.WorkflowInstanceHistoryStageInput](../../../sdk/models/shared/workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `lastFailure`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `nextExecution`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `output`                                                                                                      | [shared.WorkflowInstanceHistoryStageOutput](../../../sdk/models/shared/workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `startedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `terminated`                                                                                                  | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `terminatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |