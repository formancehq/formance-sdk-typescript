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
        attempt: 100226,
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
              id: BigInt("714242"),
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
              timestamp: new Date("2024-12-30T17:40:17.979Z"),
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
                  date: new Date("2022-06-13T19:05:17.540Z"),
                  raw: {},
                  status: OrchestrationPaymentStatus.Cancelled,
                },
              ],
              asset: "USD",
              connectorID: "<value>",
              createdAt: new Date("2022-06-28T02:12:50.953Z"),
              destinationAccountID: "<value>",
              id: "XXX",
              initialAmount: BigInt("100"),
              metadata: {},
              raw: {},
              reference: "<value>",
              scheme: OrchestrationPaymentScheme.GooglePay,
              sourceAccountID: "<value>",
              status: OrchestrationPaymentStatus.Pending,
              type: OrchestrationPaymentType.Other,
            },
          },
          listWallets: {
            cursor: {
              data: [
                {
                  createdAt: new Date("2024-06-03T19:43:04.405Z"),
                  id: "961b7bdf-d05b-4280-a30c-35eb02993e98",
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
              id: BigInt("730122"),
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
              timestamp: new Date("2022-12-08T21:24:04.180Z"),
            },
          },
        },
        startedAt: new Date("2023-03-13T10:48:24.554Z"),
        terminated: false,
      },
    ],
  },
  statusCode: 201,
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