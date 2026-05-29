# WorkflowInstanceHistoryStage

## Example Usage

```typescript
import { PaymentScheme, PaymentStatus, PaymentType, WorkflowInstanceHistoryStage } from "@formance/formance-sdk/sdk/models/orchestration";

let value: WorkflowInstanceHistoryStage = {
  workflowInstanceHistoryStageInput: {
    activityCreateTransaction: {
      postTransaction: {
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
    activityCreditWallet: {
      creditWalletRequest: {
        monetary: {
          amount: 100n,
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        sources: [],
      },
    },
    activityDebitWallet: {
      debitWalletRequest: {
        monetary: {
          amount: 100n,
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        pending: true,
      },
    },
    createTransferInitiationRequest: {
      amount: 100n,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
      provider: "stripe",
    },
    stripeTransferRequest: {
      amount: 100n,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
    },
  },
  workflowInstanceHistoryStageOutput: {
    accountResponse: {
      account: {
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
        volumes1: {
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
        address: "users:001",
        metadata: {
          "admin": "true",
        },
      },
    },
    createTransactionResponse: {
      transaction: {
        metadata: {
          "admin": "true",
        },
        id: 405193n,
        postings: [],
        reference: "ref:001",
        reverted: true,
        timestamp: new Date("2024-09-01T21:53:30.576Z"),
      },
    },
    createTransactionResponse1: {
      transaction: {
        metadata: {
          "admin": "true",
        },
        id: 405193n,
        postings: [],
        reference: "ref:001",
        reverted: true,
        timestamp: new Date("2024-09-01T21:53:30.576Z"),
      },
    },
    listWalletsResponse: {
      cursor: {
        data: [
          {
            createdAt: new Date("2025-06-28T01:10:46.423Z"),
            id: "547d3f30-b54f-4b7e-af88-9d5b3570f784",
            ledger: "<value>",
            metadata: {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
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
    paymentResponse: {
      payment: {
        paymentMetadata: {},
        paymentStatus: PaymentStatus.Cancelled,
        adjustments: [],
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2026-05-29T13:33:48.219Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 100n,
        raw: {},
        reference: "<value>",
        scheme: PaymentScheme.SepaCredit,
        sourceAccountID: "<id>",
        type: PaymentType.Transfer,
      },
    },
  },
  attempt: 759858,
  name: "<value>",
  startedAt: new Date("2026-10-27T21:37:10.020Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `workflowInstanceHistoryStageInput`                                                                                         | [orchestration.WorkflowInstanceHistoryStageInput](../../../sdk/models/orchestration/workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `workflowInstanceHistoryStageOutput`                                                                                        | [orchestration.WorkflowInstanceHistoryStageOutput](../../../sdk/models/orchestration/workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `attempt`                                                                                                                   | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `error`                                                                                                                     | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `lastFailure`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `nextExecution`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |
| `startedAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `terminated`                                                                                                                | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `terminatedAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |