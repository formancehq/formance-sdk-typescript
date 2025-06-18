# V2AccountsCursorResponse

## Example Usage

```typescript
import { V2AccountsCursorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AccountsCursorResponse = {
  cursor: {
    data: [
      {
        address: "users:001",
        effectiveVolumes: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
        metadata: {
          "admin": "true",
        },
        volumes: {
          "USD": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
          "EUR": {
            balance: 90n,
            input: 100n,
            output: 10n,
          },
        },
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
| `cursor`                                                                                              | [shared.V2AccountsCursorResponseCursor](../../../sdk/models/shared/v2accountscursorresponsecursor.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |