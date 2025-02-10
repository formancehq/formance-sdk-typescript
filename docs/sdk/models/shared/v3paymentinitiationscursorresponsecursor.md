# V3PaymentInitiationsCursorResponseCursor

## Example Usage

```typescript
import {
  V3PaymentInitiationsCursorResponseCursor,
  V3PaymentInitiationStatusEnum,
  V3PaymentInitiationTypeEnum,
} from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationsCursorResponseCursor = {
  data: [
    {
      amount: BigInt("563937"),
      asset: "<value>",
      connectorID: "<value>",
      createdAt: new Date("2025-01-21T07:34:32.676Z"),
      description: "own brr about beneath prime gee clonk gloss",
      id: "<id>",
      reference: "<value>",
      scheduledAt: new Date("2023-06-08T02:18:28.420Z"),
      status: V3PaymentInitiationStatusEnum.WaitingForValidation,
      type: V3PaymentInitiationTypeEnum.Unknown,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.V3PaymentInitiation](../../../sdk/models/shared/v3paymentinitiation.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               | false                                                                             |
| `next`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `pageSize`                                                                        | *number*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               | 15                                                                                |
| `previous`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                      |