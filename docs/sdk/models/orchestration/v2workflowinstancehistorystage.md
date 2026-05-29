# V2WorkflowInstanceHistoryStage

## Example Usage

```typescript
import { V2PaymentScheme, V2PaymentStatus, V2PaymentType, V2WorkflowInstanceHistoryStage } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2WorkflowInstanceHistoryStage = {
  v2WorkflowInstanceHistoryStageInput: {
    v2ActivityCreateTransaction: {
      v2PostTransaction: {
        v2Metadata: {
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
    v2ActivityCreditWallet: {
      v2CreditWalletRequest: {
        v2Monetary: {
          amount: 100n,
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        sources: [],
      },
    },
    v2ActivityDebitWallet: {
      v2DebitWalletRequest: {
        v2Monetary: {
          amount: 100n,
          asset: "USD/2",
        },
        metadata: {
          "key": "",
        },
        pending: true,
      },
    },
    v2CreateTransferInitiationRequest: {
      amount: 100n,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
      provider: "stripe",
    },
    v2StripeTransferRequest: {
      amount: 100n,
      asset: "USD",
      destination: "acct_1Gqj58KZcSIg2N2q",
      metadata: {},
    },
  },
  v2WorkflowInstanceHistoryStageOutput: {
    v2AccountResponse: {
      v2Account: {
        v2Volumes: {
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
        v2Volumes1: {
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
    v2CreateTransactionResponse: {
      data: [],
    },
    v2ListWalletsResponse: {
      v2Cursor: {
        data: [
          {
            createdAt: new Date("2024-11-18T18:11:54.712Z"),
            id: "be6dedcb-1035-4cf1-9638-36083616f1c8",
            ledger: "<value>",
            metadata: {},
            name: "<value>",
          },
        ],
        hasMore: false,
        next: "",
        pageSize: 15,
        previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
      },
    },
    v2PaymentResponse: {
      v2Payment: {
        v2PaymentMetadata: {},
        v2PaymentStatus: V2PaymentStatus.Failed,
        adjustments: [],
        asset: "USD",
        connectorID: "<id>",
        createdAt: new Date("2026-02-11T04:04:45.176Z"),
        destinationAccountID: "<id>",
        id: "XXX",
        initialAmount: 100n,
        raw: {},
        reference: "<value>",
        scheme: V2PaymentScheme.AchDebit,
        sourceAccountID: "<id>",
        type: V2PaymentType.Transfer,
      },
    },
  },
  attempt: 24169,
  name: "<value>",
  startedAt: new Date("2024-05-03T04:36:11.622Z"),
  terminated: false,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `v2WorkflowInstanceHistoryStageInput`                                                                                           | [orchestration.V2WorkflowInstanceHistoryStageInput](../../../sdk/models/orchestration/v2workflowinstancehistorystageinput.md)   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `v2WorkflowInstanceHistoryStageOutput`                                                                                          | [orchestration.V2WorkflowInstanceHistoryStageOutput](../../../sdk/models/orchestration/v2workflowinstancehistorystageoutput.md) | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `attempt`                                                                                                                       | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `error`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `lastFailure`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `nextExecution`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `startedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `terminated`                                                                                                                    | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `terminatedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |