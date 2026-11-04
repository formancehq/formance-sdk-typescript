# V2ActivityGetWallet

Arguments for the activity that reads a wallet

## Example Usage

```typescript
import { V2ActivityGetWallet } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityGetWallet = {
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | Identifier of the wallet to read |