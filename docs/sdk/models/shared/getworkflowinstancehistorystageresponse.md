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
      attempt: 378268,
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
            id: BigInt("657862"),
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
            timestamp: new Date("2024-01-29T23:03:20.464Z"),
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
                date: new Date("2025-09-13T19:15:55.610Z"),
                raw: {},
                status: OrchestrationPaymentStatus.Cancelled,
              },
            ],
            asset: "USD",
            connectorID: "<id>",
            createdAt: new Date("2023-02-03T08:20:20.613Z"),
            destinationAccountID: "<id>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.Diners,
            sourceAccountID: "<id>",
            status: OrchestrationPaymentStatus.Pending,
            type: OrchestrationPaymentType.PayIn,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2023-09-07T14:29:56.720Z"),
                id: "7d37eac8-f903-469c-86bc-5fae8bce286e",
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
            id: BigInt("982574"),
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
            timestamp: new Date("2025-08-17T11:52:17.865Z"),
          },
        },
      },
      startedAt: new Date("2023-03-22T21:55:35.437Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.WorkflowInstanceHistoryStage](../../../sdk/models/shared/workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |