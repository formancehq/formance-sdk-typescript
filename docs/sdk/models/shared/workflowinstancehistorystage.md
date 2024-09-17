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
  attempt: 518835,
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
        sources: [
          {
            identifier: "<value>",
            type: "<value>",
          },
        ],
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
      waitingValidation: false,
    },
  },
  name: "<value>",
  output: {
    createTransaction: {
      data: {
        id: BigInt("306810"),
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
        timestamp: new Date("2023-06-20T07:08:17.746Z"),
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
            date: new Date("2023-09-25T23:41:23.030Z"),
            raw: {},
            status: OrchestrationPaymentStatus.Terminated,
          },
        ],
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2024-11-17T12:56:04.847Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: OrchestrationPaymentScheme.Diners,
        sourceAccountID: "<value>",
        status: OrchestrationPaymentStatus.Failed,
        type: OrchestrationPaymentType.Payout,
      },
    },
    listWallets: {
      cursor: {
        data: [
          {
            createdAt: new Date("2022-02-08T18:10:24.678Z"),
            id: "c688282a-a482-4562-b222-e9817ee17cbe",
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
        id: BigInt("399025"),
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
        timestamp: new Date("2022-04-13T10:21:26.999Z"),
      },
    },
  },
  startedAt: new Date("2024-09-17T19:59:01.544Z"),
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