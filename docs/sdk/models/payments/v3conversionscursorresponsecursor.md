# V3ConversionsCursorResponseCursor

## Example Usage

```typescript
import { V3ConversionsCursorResponseCursor, V3ConversionStatusEnum } from "@formance/formance-sdk/sdk/models/payments";

let value: V3ConversionsCursorResponseCursor = {
  data: [
    {
      v3ConversionStatusEnum: V3ConversionStatusEnum.Failed,
      connectorID: "<value>",
      createdAt: new Date("2025-03-25T16:04:21.278Z"),
      destinationAsset: "<value>",
      id: "<id>",
      provider: "<value>",
      reference: "<value>",
      sourceAmount: 837731n,
      sourceAsset: "<value>",
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