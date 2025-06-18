# V3PaymentInitiationAdjustmentsCursorResponseCursor

## Example Usage

```typescript
import { V3PaymentInitiationAdjustmentsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V3PaymentInitiationAdjustmentsCursorResponseCursor = {
  data: [],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [shared.V3PaymentInitiationAdjustment](../../../sdk/models/shared/v3paymentinitiationadjustment.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `hasMore`                                                                                             | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   | false                                                                                                 |
| `next`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `pageSize`                                                                                            | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 15                                                                                                    |
| `previous`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                                                          |