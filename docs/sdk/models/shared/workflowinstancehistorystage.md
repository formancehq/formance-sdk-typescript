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
  attempt: 506863,
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
        id: BigInt("97676"),
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
        timestamp: new Date("2023-07-19T08:30:48.959Z"),
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
            date: new Date("2024-10-25T11:59:23.348Z"),
            raw: {},
            status: OrchestrationPaymentStatus.Active,
          },
        ],
        asset: "USD",
        connectorID: "<value>",
        createdAt: new Date("2024-01-13T03:31:14.357Z"),
        destinationAccountID: "<value>",
        id: "XXX",
        initialAmount: BigInt("100"),
        metadata: {},
        raw: {},
        reference: "<value>",
        scheme: OrchestrationPaymentScheme.ApplePay,
        sourceAccountID: "<value>",
        status: OrchestrationPaymentStatus.Pending,
        type: OrchestrationPaymentType.Payout,
      },
    },
    listWallets: {
      cursor: {
        data: [
          {
            createdAt: new Date("2024-02-16T19:29:46.908Z"),
            id: "0e803f91-4706-4739-ac39-afcd72f271ff",
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
        id: BigInt("349993"),
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
        timestamp: new Date("2022-10-06T19:16:28.844Z"),
      },
    },
  },
  startedAt: new Date("2022-10-18T18:32:19.135Z"),
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