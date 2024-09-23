# ListPaymentsResponse

## Example Usage

```typescript
import { ListPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { PaymentScheme, PaymentStatus, PaymentType } from "@formance/formance-sdk/sdk/models/shared";

let value: ListPaymentsResponse = {
  contentType: "<value>",
  paymentsCursor: {
    cursor: {
      data: [
        {
          adjustments: [
            {
              amount: BigInt("100"),
              createdAt: new Date("2024-11-17T12:56:04.551Z"),
              raw: {},
              reference: "<value>",
              status: PaymentStatus.Dispute,
            },
          ],
          amount: BigInt("100"),
          asset: "USD",
          connectorID: "<value>",
          createdAt: new Date("2022-02-08T18:10:24.636Z"),
          destinationAccountID: "<value>",
          id: "XXX",
          initialAmount: BigInt("100"),
          metadata: {
            "key": "<value>",
          },
          raw: {},
          reference: "<value>",
          scheme: PaymentScheme.Cup,
          sourceAccountID: "<value>",
          status: PaymentStatus.Refunded,
          type: PaymentType.Transfer,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 681393,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `paymentsCursor`                                                      | [shared.PaymentsCursor](../../../sdk/models/shared/paymentscursor.md) | :heavy_minus_sign:                                                    | OK                                                                    |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |