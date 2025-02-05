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
              createdAt: new Date("2025-11-09T13:09:41.435Z"),
              raw: {},
              reference: "<value>",
              status: PaymentStatus.Failed,
            },
          ],
          amount: BigInt("100"),
          asset: "USD",
          connectorID: "<id>",
          createdAt: new Date("2023-06-25T20:56:27.257Z"),
          destinationAccountID: "<id>",
          id: "XXX",
          initialAmount: BigInt("100"),
          metadata: {
            "key": "<value>",
          },
          raw: {},
          reference: "<value>",
          scheme: PaymentScheme.AchDebit,
          sourceAccountID: "<id>",
          status: PaymentStatus.Expired,
          type: PaymentType.Other,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
  statusCode: 102,
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