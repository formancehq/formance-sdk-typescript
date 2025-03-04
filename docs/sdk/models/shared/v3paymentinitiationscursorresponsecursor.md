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
      amount: BigInt("932220"),
      asset: "<value>",
      connectorID: "<value>",
      createdAt: new Date("2025-02-26T05:58:35.788Z"),
      description: "overcoat lawmaker depot deadly fen well-worn",
      id: "<id>",
      reference: "<value>",
      scheduledAt: new Date("2023-07-28T17:27:23.627Z"),
      status: V3PaymentInitiationStatusEnum.Rejected,
      type: V3PaymentInitiationTypeEnum.Payout,
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