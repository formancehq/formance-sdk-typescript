# V2WorkflowInstanceHistoryStage

## Example Usage

```typescript
import { V2WorkflowInstanceHistoryStage } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStage = {
  attempt: 282083,
  input: {
    createTransaction: {
      data: {
        metadata: {
          "admin": "true",
        },
        postings: [
          {
            amount: 100n,
            asset: "COIN",
            destination: "users:002",
            source: "users:001",
          },
        ],
        reference: "ref:001",
        script: {
          plain:
            "vars {\naccount $user\n}\nsend [COIN 10] (\n\tsource = @world\n\tdestination = $user\n)\n",
          vars: {
            "user": "users:042",
          },
        },
      },
    },
    createTransferInitiation: {
      amount: 100n,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
      provider: "stripe",
    },
    creditWallet: {
      data: {
        amount: {
          amount: 100n,
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
          amount: 100n,
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        pending: true,
      },
    },
    stripeTransfer: {
      amount: 100n,
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
          postings: [],
          reference: "ref:001",
          timestamp: new Date("2026-03-28T10:26:16.538Z"),
          txid: 910526n,
        },
      ],
    },
    getAccount: {
      data: {
        address: "users:001",
        effectiveVolumes: {
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
        metadata: {
          "admin": "true",
        },
        volumes: {
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
      },
    },
    getPayment: {
      data: {
        adjustments: [],
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2026-06-20T02:05:25.894Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 100n,
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: "ach debit",
        sourceAccountID: "<id>",
        status: "SUCCEEDED",
        type: "PAY-IN",
      },
    },
    listWallets: {
      cursor: {
        data: [],
        hasMore: false,
        next: "",
        pageSize: 15,
        previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
      },
    },
  },
  startedAt: new Date("2024-09-30T07:20:02.601Z"),
  terminated: true,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `activityID`                                                                                                                    | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Stable identifier of the activity within its workflow execution                                                                 |
| `attempt`                                                                                                                       | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | How many times the activity has been attempted                                                                                  |
| `error`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Why the activity failed, absent when it succeeded                                                                               |
| `input`                                                                                                                         | [orchestration.V2WorkflowInstanceHistoryStageInput](../../../sdk/models/orchestration/v2workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                                              | Arguments an activity was called with, keyed by activity name                                                                   |
| `lastFailure`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Error reported by the most recent failed attempt                                                                                |
| `lastFailureType`                                                                                                               | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Application failure type of the most recent failed attempt, when available                                                      |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Name of the activity this history entry records                                                                                 |
| `nextExecution`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | When the next retry is scheduled, absent while paused, when no retry is scheduled, or once settled                              |
| `output`                                                                                                                        | [orchestration.V2WorkflowInstanceHistoryStageOutput](../../../sdk/models/orchestration/v2workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                                              | Result an activity returned, keyed by activity name                                                                             |
| `pauseReason`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Reason recorded by Temporal for the activity pause, when available                                                              |
| `paused`                                                                                                                        | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Whether Temporal has paused this pending activity; a pause is not a terminal failure                                            |
| `startedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | When the activity started                                                                                                       |
| `temporalRunID`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Run identifier of the described stage workflow execution                                                                        |
| `terminated`                                                                                                                    | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | Whether the activity has finished                                                                                               |
| `terminatedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | When the activity finished, absent while it is still running                                                                    |