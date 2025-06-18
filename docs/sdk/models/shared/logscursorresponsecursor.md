# LogsCursorResponseCursor

## Example Usage

```typescript
import { LogsCursorResponseCursor, LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: LogsCursorResponseCursor = {
  data: [
    {
      data: {},
      date: new Date("2025-11-01T10:53:26.569Z"),
      hash: "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
      id: 1234,
      type: LogType.SetMetadata,
    },
  ],
  hasMore: false,
  next: "",
  pageSize: 15,
  previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `data`                                            | [shared.Log](../../../sdk/models/shared/log.md)[] | :heavy_check_mark:                                | N/A                                               |                                                   |
| `hasMore`                                         | *boolean*                                         | :heavy_check_mark:                                | N/A                                               | false                                             |
| `next`                                            | *string*                                          | :heavy_minus_sign:                                | N/A                                               |                                                   |
| `pageSize`                                        | *number*                                          | :heavy_check_mark:                                | N/A                                               | 15                                                |
| `previous`                                        | *string*                                          | :heavy_minus_sign:                                | N/A                                               | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=      |