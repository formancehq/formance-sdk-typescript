# V2GetInstanceStageHistoryResponse

## Example Usage

```typescript
import { V2GetInstanceStageHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";
import { Scheme, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetInstanceStageHistoryResponse = {
  contentType: "<value>",
  statusCode: 202,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2GetWorkflowInstanceHistoryStageResponse: {
    data: [
      {
        attempt: 100294,
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
                timestamp: new Date("2023-01-19T00:09:53.916Z"),
                txid: BigInt("929530"),
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
                  date: new Date("2025-01-04T05:29:05.430Z"),
                  raw: {},
                  status: V2PaymentStatus.Succeeded,
                },
              ],
              asset: "USD",
              connectorID: "<id>",
              createdAt: new Date("2023-11-05T18:37:43.326Z"),
              destinationAccountID: "<id>",
              id: "XXX",
              initialAmount: BigInt("100"),
              metadata: {},
              raw: {},
              reference: "<value>",
              scheme: Scheme.ApplePay,
              sourceAccountID: "<id>",
              status: V2PaymentStatus.Pending,
              type: V2PaymentType.Payout,
            },
          },
          listWallets: {
            cursor: {
              data: [
                {
                  createdAt: new Date("2025-12-07T08:01:55.761Z"),
                  id: "e5f3ffca-d4d9-4052-bf77-a52d3831dffe",
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
        startedAt: new Date("2024-01-01T03:03:00.284Z"),
        terminated: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `v2GetWorkflowInstanceHistoryStageResponse`                                                                                 | [shared.V2GetWorkflowInstanceHistoryStageResponse](../../../sdk/models/shared/v2getworkflowinstancehistorystageresponse.md) | :heavy_minus_sign:                                                                                                          | The workflow instance stage history                                                                                         |