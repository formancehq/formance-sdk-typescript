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
      attempt: 24272,
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
            id: BigInt("652125"),
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
            timestamp: new Date("2024-07-24T03:46:55.765Z"),
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
                date: new Date("2023-06-05T22:56:35.057Z"),
                raw: {},
                status: OrchestrationPaymentStatus.Cancelled,
              },
            ],
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2022-10-19T03:11:54.710Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: OrchestrationPaymentScheme.Visa,
            sourceAccountID: "<value>",
            status: OrchestrationPaymentStatus.Terminated,
            type: OrchestrationPaymentType.Payout,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2024-06-21T19:04:10.722Z"),
                id: "34cb8b60-0810-4fd2-a0f4-2b14fa86c2fd",
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
            id: BigInt("42906"),
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
            timestamp: new Date("2024-02-08T03:18:25.211Z"),
          },
        },
      },
      startedAt: new Date("2024-09-27T23:01:52.690Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.WorkflowInstanceHistoryStage](../../../sdk/models/shared/workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |