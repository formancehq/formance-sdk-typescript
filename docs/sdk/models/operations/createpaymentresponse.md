# CreatePaymentResponse

## Example Usage

```typescript
import { CreatePaymentResponse } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: CreatePaymentResponse = {
  contentType: "<value>",
  paymentResponse: {
    data: {
      adjustments: [
        {
          amount: BigInt("100"),
          createdAt: new Date("2022-09-12T12:41:12.752Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.Succeeded,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2022-02-28T13:20:54.923Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.Dragonpay,
      sourceAccountID: "<value>",
      status: PaymentStatus.Pending,
      type: PaymentType.Other,
    },
  },
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `paymentResponse`                                                       | [shared.PaymentResponse](../../../sdk/models/shared/paymentresponse.md) | :heavy_minus_sign:                                                      | OK                                                                      |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |