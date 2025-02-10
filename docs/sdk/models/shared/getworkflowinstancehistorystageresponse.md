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
      attempt: 98759,
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
            id: BigInt("748606"),
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
            timestamp: new Date("2024-05-11T02:35:54.356Z"),
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
                date: new Date("2025-02-21T05:37:54.958Z"),
                raw: {},
                status: OrchestrationPaymentStatus.Cancelled,
              },
            ],
            asset: "USD",
            connectorID: "<id>",
            createdAt: new Date("2023-06-10T15:44:18.944Z"),
            destinationAccountID: "<id>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.Unknown,
            sourceAccountID: "<id>",
            status: OrchestrationPaymentStatus.Terminated,
            type: OrchestrationPaymentType.Payout,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2025-10-30T14:18:34.931Z"),
                id: "f3a1ada6-669e-4e02-9135-8abefadc4e00",
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
            id: BigInt("462097"),
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
            timestamp: new Date("2024-11-30T15:29:51.324Z"),
          },
        },
      },
      startedAt: new Date("2023-04-22T12:57:54.328Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.WorkflowInstanceHistoryStage](../../../sdk/models/shared/workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |