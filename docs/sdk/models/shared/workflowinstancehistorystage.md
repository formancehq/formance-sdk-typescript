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
  attempt: 405193,
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
      data: {
        id: 194985n,
        metadata: {
          "admin": "true",
        },
        postings: [],
        reference: "ref:001",
        reverted: true,
        timestamp: new Date("2024-09-30T06:28:56.548Z"),
      },
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
        createdAt: new Date("2023-12-16T14:43:43.030Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 100n,
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: OrchestrationPaymentScheme.Ach,
        sourceAccountID: "<id>",
        status: OrchestrationPaymentStatus.Active,
        type: OrchestrationPaymentType.Other,
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
    revertTransaction: {
      data: {
        id: 194985n,
        metadata: {
          "admin": "true",
        },
        postings: [],
        reference: "ref:001",
        reverted: true,
        timestamp: new Date("2024-09-30T06:28:56.548Z"),
      },
    },
  },
  startedAt: new Date("2023-02-09T04:59:09.612Z"),
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