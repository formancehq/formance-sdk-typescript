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
          createdAt: new Date("2023-07-23T15:26:23.118Z"),
          raw: {},
          reference: "<value>",
          status: PaymentStatus.Failed,
        },
      ],
      amount: BigInt("100"),
      asset: "USD",
      connectorID: "<value>",
      createdAt: new Date("2023-09-25T23:41:23.014Z"),
      destinationAccountID: "<value>",
      id: "XXX",
      initialAmount: BigInt("100"),
      metadata: {
        "key": "<value>",
      },
      raw: {},
      reference: "<value>",
      scheme: PaymentScheme.Rtp,
      sourceAccountID: "<value>",
      status: PaymentStatus.Dispute,
      type: PaymentType.PayIn,
    },
  },
  statusCode: 304,
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