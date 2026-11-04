# ActivityConfirmHold

Arguments for the activity that confirms a wallet hold

## Example Usage

```typescript
import { ActivityConfirmHold } from "@formance/formance-sdk/sdk/models/orchestration";

let value: ActivityConfirmHold = {
  id: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Identifier of the hold to confirm |