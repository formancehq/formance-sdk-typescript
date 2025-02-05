# GetInstanceStageHistoryResponse

## Example Usage

```typescript
import { GetInstanceStageHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";
import { OrchestrationPaymentScheme, OrchestrationPaymentStatus, OrchestrationPaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetInstanceStageHistoryResponse = {
  contentType: "<value>",
  getWorkflowInstanceHistoryStageResponse: {
    data: [
      {
        attempt: 928082,
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
              id: BigInt("704415"),
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
              timestamp: new Date("2023-02-04T21:29:28.328Z"),
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
                  date: new Date("2023-06-30T12:06:54.333Z"),
                  raw: {},
                  status: OrchestrationPaymentStatus.Failed,
                },
              ],
              asset: "USD",
              connectorID: "<id>",
              createdAt: new Date("2024-09-24T15:25:14.861Z"),
              destinationAccountID: "<id>",
              id: "XXX",
              initialAmount: BigInt("100"),
              metadata: {},
              raw: {},
              reference: "<value>",
              scheme: OrchestrationPaymentScheme.Discover,
              sourceAccountID: "<id>",
              status: OrchestrationPaymentStatus.Cancelled,
              type: OrchestrationPaymentType.Transfer,
            },
          },
          listWallets: {
            cursor: {
              data: [
                {
                  createdAt: new Date("2024-08-10T01:17:06.903Z"),
                  id: "9b4632fb-7340-464b-9620-1a78ef3a40c5",
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
              id: BigInt("588317"),
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
              timestamp: new Date("2025-06-29T19:53:54.840Z"),
            },
          },
        },
        startedAt: new Date("2024-11-20T08:44:18.290Z"),
        terminated: false,
      },
    ],
  },
  statusCode: 503,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `getWorkflowInstanceHistoryStageResponse`                                                                               | [shared.GetWorkflowInstanceHistoryStageResponse](../../../sdk/models/shared/getworkflowinstancehistorystageresponse.md) | :heavy_minus_sign:                                                                                                      | The workflow instance stage history                                                                                     |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |