# OrchestrationWallet

## Example Usage

```typescript
import { OrchestrationWallet } from "@formance/formance-sdk/sdk/models/shared";

let value: OrchestrationWallet = {
  createdAt: new Date("2025-05-13T10:28:28.069Z"),
  id: "31e9fdf8-3038-4a06-a83d-78402f61c5e8",
  ledger: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique ID of the wallet.                                                                  |
| `ledger`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | Metadata associated with the wallet.                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |