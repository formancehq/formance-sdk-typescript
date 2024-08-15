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
                    createdAt: new Date("2023-09-12T10:43:40.519Z"),
                    raw: {},
                    reference: "<value>",
                    status: PaymentStatus.RefundedFailure,
                },
            ],
            amount: BigInt("100"),
            asset: "USD",
            connectorID: "<value>",
            createdAt: new Date("2024-08-06T03:39:28.235Z"),
            destinationAccountID: "<value>",
            id: "XXX",
            initialAmount: BigInt("100"),
            metadata: {
                key: "<value>",
            },
            raw: {},
            reference: "<value>",
            scheme: PaymentScheme.Discover,
            sourceAccountID: "<value>",
            status: PaymentStatus.Refunded,
            type: PaymentType.Transfer,
        },
    },
    statusCode: 916723,
    rawResponse: new Response('{"message": "hello world"}', {
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