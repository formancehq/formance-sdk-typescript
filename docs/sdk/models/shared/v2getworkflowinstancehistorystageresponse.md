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
      attempt: 682119,
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
              timestamp: new Date("2024-09-03T21:07:57.724Z"),
              txid: BigInt("29190"),
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
                date: new Date("2022-01-02T07:45:50.322Z"),
                raw: {},
                status: V2PaymentStatus.Failed,
              },
            ],
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2024-10-24T04:36:14.577Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {},
            raw: {},
            reference: "<value>",
            scheme: Scheme.SepaDebit,
            sourceAccountID: "<value>",
            status: V2PaymentStatus.Cancelled,
            type: V2PaymentType.Transfer,
          },
        },
        listWallets: {
          cursor: {
            data: [
              {
                createdAt: new Date("2024-05-22T18:23:09.045Z"),
                id: "5f350d8c-db5a-4341-8143-010421813d52",
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
      startedAt: new Date("2022-03-02T09:32:30.763Z"),
      terminated: false,
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [shared.V2WorkflowInstanceHistoryStage](../../../sdk/models/shared/v2workflowinstancehistorystage.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |