# V3RemoveEventsSinkRequest

## Example Usage

```typescript
import { V3RemoveEventsSinkRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3RemoveEventsSinkRequest = {
  sinkName: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `idempotencyKey`                                              | *string*                                                      | :heavy_minus_sign:                                            | Idempotency key for the request                               |
| `controllerId`                                                | *string*                                                      | :heavy_minus_sign:                                            | Optional opaque owner identity used as a removal precondition |
| `sinkName`                                                    | *string*                                                      | :heavy_check_mark:                                            | Name of the event sink to remove                              |