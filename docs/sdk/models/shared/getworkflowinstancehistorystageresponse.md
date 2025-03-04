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
      attempt: 588662,
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
            id: BigInt("45510"),
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
            timestamp: new Date("2023-08-05T23:44:22.450Z"),
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
                date: new Date("2024-03-19T15:09:55.930Z"),
                raw: {},
                status: OrchestrationPaymentStatus.Failed,
              },
            ],
            asset: "USD",
            connectorID: "<id>",
            createdAt: new Date("2025-04-26T00:52:10.331Z"),
            destinationAccountID: "<id>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.SepaDebit,
            sourceAccountID: "<id>",
            status: OrchestrationPaymentStatus.Succeeded,
            type: OrchestrationPaymentType.Other,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2023-12-14T17:12:44.022Z"),
                id: "fae8bce2-86e1-4fe1-b7bb-ec47b2374d95",
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
            id: BigInt("804879"),
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
            timestamp: new Date("2025-12-30T04:43:36.074Z"),
          },
        },
      },
      startedAt: new Date("2025-07-17T15:34:53.162Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.WorkflowInstanceHistoryStage](../../../sdk/models/shared/workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |