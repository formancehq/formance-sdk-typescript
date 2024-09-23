# GetPaymentResponse

## Example Usage

```typescript
import { GetPaymentResponse } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: GetPaymentResponse = {
  contentType: "<value>",
  paymentResponse: {
    data: {
      adjustments: [
        {
          amount: BigInt("100"),
          createdAt: new Date("2022-07-20T20:59:34.122Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.Succeeded,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-06-19T21:49:56.662Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.Unionpay,
      sourceAccountID: "<value>",
      status: PaymentStatus.Other,
      type: PaymentType.Other,
    },
  },
  statusCode: 748664,
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