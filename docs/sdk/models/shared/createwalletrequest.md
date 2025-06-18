# CreateWalletRequest

## Example Usage

```typescript
import { CreateWalletRequest } from "@formance/formance-sdk/sdk/models/shared";

let value: CreateWalletRequest = {
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `metadata`                                | Record<string, *string*>                  | :heavy_check_mark:                        | Custom metadata to attach to this wallet. |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | N/A                                       |