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
        attempt: 929297,
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
              id: BigInt("667411"),
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
              timestamp: new Date("2022-05-25T10:48:39.501Z"),
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
                  date: new Date("2024-02-25T02:16:14.798Z"),
                  raw: {},
                  status: OrchestrationPaymentStatus.Active,
                },
              ],
              asset: "USD",
              connectorID: "<value>",
              createdAt: new Date("2022-07-20T18:39:56.110Z"),
              destinationAccountID: "<value>",
              id: "XXX",
              initialAmount: BigInt("100"),
              metadata: {},
              raw: {},
              reference: "<value>",
              scheme: OrchestrationPaymentScheme.ApplePay,
              sourceAccountID: "<value>",
              status: OrchestrationPaymentStatus.Pending,
              type: OrchestrationPaymentType.Other,
            },
          },
          listWallets: {
            cursor: {
              data: [
                {
                  createdAt: new Date("2022-01-06T03:30:35.300Z"),
                  id: "a4bf3999-3f7d-4b4d-a6e9-ebb8fa6904a4",
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
              id: BigInt("428769"),
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
              timestamp: new Date("2022-05-29T11:30:35.227Z"),
            },
          },
        },
        startedAt: new Date("2022-11-23T22:01:05.887Z"),
        terminated: false,
      },
    ],
  },
  statusCode: 569965,
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