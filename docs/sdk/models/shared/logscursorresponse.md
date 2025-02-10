# LogsCursorResponse

## Example Usage

```typescript
import { LogsCursorResponse, Type } from "@formance/formance-sdk/sdk/models/shared";

let value: LogsCursorResponse = {
  cursor: {
    data: [
      {
        data: {
          "key": "<value>",
        },
        date: new Date("2023-02-16T12:43:22.337Z"),
        hash:
          "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
        id: 1234,
        type: Type.SetMetadata,
      },
    ],
    hasMore: false,
    next: "",
    pageSize: 15,
    previous: "YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cursor`                                                                                  | [shared.LogsCursorResponseCursor](../../../sdk/models/shared/logscursorresponsecursor.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |