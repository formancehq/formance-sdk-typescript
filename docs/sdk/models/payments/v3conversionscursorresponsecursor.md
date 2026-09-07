# V3ConversionsCursorResponseCursor

Paginated cursor wrapping the list of conversions

## Example Usage

```typescript
import { V3ConversionsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConversionsCursorResponseCursor = {
  data: [
    {
      connectorID: "<value>",
      createdAt: new Date("2026-08-15T11:32:15.751Z"),
      destinationAsset: "<value>",
      id: "<id>",
      provider: "<value>",
      reference: "<value>",
      sourceAmount: 410282n,
      sourceAsset: "<value>",
      status: "FAILED",
      updatedAt: new Date("2024-05-19T04:15:04.336Z"),
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [payments.V3Conversion](../../../sdk/models/payments/v3conversion.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `hasMore`                                                               | *boolean*                                                               | :heavy_check_mark:                                                      | N/A                                                                     | false                                                                   |
| `next`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `pageSize`                                                              | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     | 15                                                                      |
| `previous`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                            |