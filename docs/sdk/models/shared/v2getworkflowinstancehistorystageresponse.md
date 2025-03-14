# V2GetWorkflowInstanceHistoryStageResponse

## Example Usage

```typescript
import {
  Scheme,
  V2GetWorkflowInstanceHistoryStageResponse,
  V2PaymentStatus,
  V2PaymentType,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetWorkflowInstanceHistoryStageResponse = {
  data: [
    {
      attempt: 252854,
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
          data: [
            {
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
              timestamp: new Date("2025-04-10T13:48:19.184Z"),
              txid: BigInt("73"),
            },
          ],
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
                date: new Date("2023-10-06T15:31:52.701Z"),
                raw: {},
                status: V2PaymentStatus.Succeeded,
              },
            ],
            asset: "USD",
            connectorID: "<id>",
            createdAt: new Date("2024-08-06T10:34:04.832Z"),
            destinationAccountID: "<id>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: Scheme.Amex,
            sourceAccountID: "<id>",
            status: V2PaymentStatus.Terminated,
            type: V2PaymentType.Payout,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2024-09-14T16:56:22.815Z"),
                id: "ad762cb6-8a20-4597-bbd7-2d9bbf4b5635",
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
      },
      startedAt: new Date("2023-11-17T15:47:00.809Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [shared.V2WorkflowInstanceHistoryStage](../../../sdk/models/shared/v2workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |