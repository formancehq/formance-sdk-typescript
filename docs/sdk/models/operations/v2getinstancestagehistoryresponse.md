# V2GetInstanceStageHistoryResponse

## Example Usage

```typescript
import { V2GetInstanceStageHistoryResponse } from "@formance/formance-sdk/sdk/models/operations";
import { Scheme, V2PaymentStatus, V2PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: V2GetInstanceStageHistoryResponse = {
  contentType: "<value>",
  statusCode: 199996,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v2GetWorkflowInstanceHistoryStageResponse: {
    data: [
      {
        attempt: 18521,
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
                timestamp: new Date("2022-09-03T10:06:53.981Z"),
                txid: BigInt("345352"),
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
                  date: new Date("2024-10-14T04:15:01.236Z"),
                  raw: {},
                  status: V2PaymentStatus.Succeeded,
                },
              ],
              asset: "USD",
              connectorID: "<value>",
              createdAt: new Date("2022-02-04T21:29:28.328Z"),
              destinationAccountID: "<value>",
              id: "XXX",
              initialAmount: BigInt("100"),
              metadata: {},
              raw: {},
              reference: "<value>",
              scheme: Scheme.Amex,
              sourceAccountID: "<value>",
              status: V2PaymentStatus.Failed,
              type: V2PaymentType.Transfer,
            },
          },
          listWallets: {
            cursor: {
              data: [
                {
                  createdAt: new Date("2022-09-18T17:31:57.984Z"),
                  id: "e989b463-2fb7-4340-864b-6201a78ef3a4",
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
        startedAt: new Date("2024-04-11T04:23:31.598Z"),
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