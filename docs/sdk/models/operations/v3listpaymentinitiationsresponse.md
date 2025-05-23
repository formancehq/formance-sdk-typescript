# V3ListPaymentInitiationsResponse

## Example Usage

```typescript
import { V3ListPaymentInitiationsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3PaymentInitiationStatusEnum, V3PaymentInitiationTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListPaymentInitiationsResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PaymentInitiationsCursorResponse: {
    cursor: {
      data: [
        {
          amount: BigInt("745233"),
          asset: "<value>",
          connectorID: "<value>",
          createdAt: new Date("2024-07-31T11:46:24.744Z"),
          description:
            "unexpectedly sightseeing contravene jaggedly programme ecliptic",
          id: "<id>",
          provider: "<value>",
          reference: "<value>",
          scheduledAt: new Date("2024-01-08T05:39:17.949Z"),
          status: V3PaymentInitiationStatusEnum.Rejected,
          type: V3PaymentInitiationTypeEnum.Payout,
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