# LogsCursorResponse

## Example Usage

```typescript
import { LogsCursorResponse, LogType } from "@formance/formance-sdk/sdk/models/shared";

let value: LogsCursorResponse = {
  cursor: {
    data: [
      {
        data: {},
        date: new Date("2025-11-01T10:53:26.569Z"),
        hash:
          "9ee060170400f556b7e1575cb13f9db004f150a08355c7431c62bc639166431e",
        id: 1234,
        type: LogType.SetMetadata,
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