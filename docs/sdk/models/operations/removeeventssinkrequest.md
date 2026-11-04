# RemoveEventsSinkRequest

## Example Usage

```typescript
import { RemoveEventsSinkRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: RemoveEventsSinkRequest = {
  sinkName: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `idempotencyKey`                                              | *string*                                                      | :heavy_minus_sign:                                            | Idempotency key for the request                               |
| `controllerId`                                                | *string*                                                      | :heavy_minus_sign:                                            | Optional opaque owner identity used as a removal precondition |
| `sinkName`                                                    | *string*                                                      | :heavy_check_mark:                                            | Name of the event sink to remove                              |