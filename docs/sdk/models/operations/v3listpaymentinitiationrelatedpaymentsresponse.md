# V3ListPaymentInitiationRelatedPaymentsResponse

## Example Usage

```typescript
import { V3ListPaymentInitiationRelatedPaymentsResponse } from "@formance/formance-sdk/sdk/models/operations";
import { V3PaymentStatusEnum, V3PaymentTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ListPaymentInitiationRelatedPaymentsResponse = {
  contentType: "<value>",
  statusCode: 101,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  v3PaymentInitiationRelatedPaymentsCursorResponse: {
    cursor: {
      data: [
        {
          amount: BigInt("75359"),
          asset: "<value>",
          connectorID: "<value>",
          createdAt: new Date("2024-04-10T10:20:08.256Z"),
          id: "<id>",
          initialAmount: BigInt("107617"),
          provider: "<value>",
          reference: "<value>",
          scheme: "<value>",
          status: V3PaymentStatusEnum.Dispute,
          type: V3PaymentTypeEnum.PayIn,
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `v3PaymentInitiationRelatedPaymentsCursorResponse`                                                                                        | [shared.V3PaymentInitiationRelatedPaymentsCursorResponse](../../../sdk/models/shared/v3paymentinitiationrelatedpaymentscursorresponse.md) | :heavy_minus_sign:                                                                                                                        | OK                                                                                                                                        |