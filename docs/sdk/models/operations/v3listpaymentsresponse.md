# V3ListPaymentsResponse

## Example Usage

```typescript
import { V3ListPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListPaymentsResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PaymentsCursorResponse: {
    cursor: {
      data: [
        {
          amount: BigInt("873557"),
          asset: "<value>",
          connectorID: "<value>",
          createdAt: new Date("2024-06-23T02:43:59.746Z"),
          id: "<id>",
          initialAmount: BigInt("898961"),
          provider: "<value>",
          reference: "<value>",
          scheme: "<value>",
          status: V3PaymentStatusEnum.Cancelled,
          type: V3PaymentTypeEnum.Payout,
        },
      ],
      hasMore: false,
      next: "",
      pageSize: 15,
      previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `v3PaymentsCursorResponse`                                                                | [shared.V3PaymentsCursorResponse](../../../sdk/models/shared/v3paymentscursorresponse.md) | :heavy_minus_sign:                                                                        | OK                                                                                        |