# V3PaymentInitiationRelatedPaymentsCursorResponseCursor

## Example Usage

```typescript
import {
  V3PaymentInitiationRelatedPaymentsCursorResponseCursor,
  V3PaymentStatusEnum,
  V3PaymentTypeEnum,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationRelatedPaymentsCursorResponseCursor = {
  data: [
    {
      amount: BigInt("858421"),
      asset: "<value>",
      connectorID: "<value>",
      createdAt: new Date("2024-03-16T06:19:45.604Z"),
      id: "<id>",
      initialAmount: BigInt("115870"),
      provider: "<value>",
      reference: "<value>",
      scheme: "<value>",
      status: V3PaymentStatusEnum.AmountAdjustement,
      type: V3PaymentTypeEnum.PayIn,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `data`                                                        | [shared.V3Payment](../../../sdk/models/shared/v3payment.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |