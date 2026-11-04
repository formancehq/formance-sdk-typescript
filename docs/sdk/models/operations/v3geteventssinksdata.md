# V3GetEventsSinksData

Configured sinks together with their per-sink status, at parity with the gRPC GetEventsSinks response.


## Example Usage

```typescript
import { V3GetEventsSinksData } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetEventsSinksData = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `sinkStatuses`          | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `sinks`                 | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |