# V3ListPaymentInitiationsResponse

## Example Usage

```typescript
import { V3ListPaymentInitiationsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3PaymentInitiationStatusEnum, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListPaymentInitiationsResponse = {
  contentType: "<value>",
  statusCode: 301,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PaymentInitiationsCursorResponse: {
    cursor: {
      data: [
        {
          amount: BigInt("975884"),
          asset: "<value>",
          connectorID: "<value>",
          createdAt: new Date("2025-10-19T02:05:23.663Z"),
          description: "gift harmful down cross-contamination before enrage",
          id: "<id>",
          reference: "<value>",
          scheduledAt: new Date("2025-02-22T16:44:36.686Z"),
          status: V3PaymentInitiationStatusEnum.Processed,
          type: V3PaymentInitiationTypeEnum.Unknown,
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

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `v3PaymentInitiationsCursorResponse`                                                                          | [shared.V3PaymentInitiationsCursorResponse](../../../sdk/models/shared/v3paymentinitiationscursorresponse.md) | :heavy_minus_sign:                                                                                            | OK                                                                                                            |