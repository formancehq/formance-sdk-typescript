# V2ActivityVoidHold

Arguments for the activity that releases a wallet hold

## Example Usage

```typescript
import { V2ActivityVoidHold } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityVoidHold = {
  id: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Identifier of the hold to release |