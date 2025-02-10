# V3ListPaymentInitiationAdjustmentsResponse

## Example Usage

```typescript
import { V3ListPaymentInitiationAdjustmentsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3PaymentInitiationStatusEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListPaymentInitiationAdjustmentsResponse = {
  contentType: "<value>",
  statusCode: 208,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PaymentInitiationAdjustmentsCursorResponse: {
    cursor: {
      data: [
        {
          createdAt: new Date("2025-04-23T21:13:00.722Z"),
          id: "<id>",
          status: V3PaymentInitiationStatusEnum.Processed,
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

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `v3PaymentInitiationAdjustmentsCursorResponse`                                                                                    | [shared.V3PaymentInitiationAdjustmentsCursorResponse](../../../sdk/models/shared/v3paymentinitiationadjustmentscursorresponse.md) | :heavy_minus_sign:                                                                                                                | OK                                                                                                                                |