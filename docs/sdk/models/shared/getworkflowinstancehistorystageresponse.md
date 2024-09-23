# GetWorkflowInstanceHistoryStageResponse

## Example Usage

```typescript
import {
  GetWorkflowInstanceHistoryStageResponse,
  OrchestrationPaymentScheme,
  OrchestrationPaymentStatus,
  OrchestrationPaymentType,
} from "@formance/formance-sdk/sdk/models/shared";

let value: GetWorkflowInstanceHistoryStageResponse = {
  data: [
    {
      attempt: 727772,
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
            id: BigInt("217663"),
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
            timestamp: new Date("2024-12-03T07:19:37.207Z"),
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
                date: new Date("2022-06-27T22:39:48.462Z"),
                raw: {},
                status: OrchestrationPaymentStatus.Active,
              },
            ],
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2022-07-17T01:20:07.188Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.Unionpay,
            sourceAccountID: "<value>",
            status: OrchestrationPaymentStatus.Terminated,
            type: OrchestrationPaymentType.Transfer,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2024-07-24T13:15:12.012Z"),
                id: "e3917557-b1eb-42f8-bf38-449ecb8e7dd3",
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
            id: BigInt("12171"),
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
            timestamp: new Date("2022-12-20T19:42:29.360Z"),
          },
        },
      },
      startedAt: new Date("2022-09-09T14:32:31.434Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.WorkflowInstanceHistoryStage](../../../sdk/models/shared/workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |