# V3AccountsCursorResponse

## Example Usage

```typescript
import { V3AccountsCursorResponse, V3AccountTypeEnum } from "@formance/formance-sdk/sdk/models/shared";

let value: V3AccountsCursorResponse = {
  cursor: {
    data: [
      {
        connectorID: "<value>",
        createdAt: new Date("2024-10-09T20:04:58.799Z"),
        id: "<id>",
        provider: "<value>",
        raw: {},
        reference: "<value>",
        type: V3AccountTypeEnum.External,
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

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                              | [shared.V3AccountsCursorResponseCursor](../../../sdk/models/shared/v3accountscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |