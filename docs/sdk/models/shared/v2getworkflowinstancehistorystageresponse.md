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
      attempt: 319834,
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
              timestamp: new Date("2024-01-06T23:51:52.329Z"),
              txid: BigInt("842974"),
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
                date: new Date("2022-01-18T19:30:48.072Z"),
                raw: {},
                status: V2PaymentStatus.Failed,
              },
            ],
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2023-05-01T09:19:55.343Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: Scheme.Unknown,
            sourceAccountID: "<value>",
            status: V2PaymentStatus.Active,
            type: V2PaymentType.Payout,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2023-07-19T04:26:02.056Z"),
                id: "2bd040fa-f8c5-456a-a5ef-031037d37eac",
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
      startedAt: new Date("2024-12-10T14:11:23.041Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [shared.V2WorkflowInstanceHistoryStage](../../../sdk/models/shared/v2workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |