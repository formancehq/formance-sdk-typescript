# V3AccountsCursorResponseCursor

## Example Usage

```typescript
import { V3AccountsCursorResponseCursor, V3AccountTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3AccountsCursorResponseCursor = {
  data: [
    {
      connectorID: "<value>",
      createdAt: new Date("2024-03-29T18:15:38.452Z"),
      id: "<id>",
      provider: "<value>",
      raw: {},
      reference: "<value>",
      type: V3AccountTypeEnum.Internal,
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
| `data`                                                        | [shared.V3Account](../../../sdk/models/shared/v3account.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |