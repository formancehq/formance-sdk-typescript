# V2AccountsCursorResponseCursor

## Example Usage

```typescript
import { V2AccountsCursorResponseCursor } from "@formance/formance-sdk/sdk/models/shared";

let value: V2AccountsCursorResponseCursor = {
  data: [
    {
      address: "users:001",
      effectiveVolumes: {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
        "EUR": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
      metadata: {
        "admin": "true",
      },
      volumes: {
        "USD": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
        "EUR": {
          balance: BigInt("90"),
          input: BigInt("100"),
          output: BigInt("10"),
        },
      },
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
| `data`                                                        | [shared.V2Account](../../../sdk/models/shared/v2account.md)[] | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `hasMore`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           | false                                                         |
| `next`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `pageSize`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           | 15                                                            |
| `previous`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           | YXVsdCBhbmQgYSBtYXhpbXVtIG1heF9yZXN1bHRzLol=                  |