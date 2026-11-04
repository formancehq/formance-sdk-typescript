# GetEventsSinksData

Configured sinks together with their per-sink status, at parity with the gRPC GetEventsSinks response.


## Example Usage

```typescript
import { GetEventsSinksData } from "@formance/formance-sdk/sdk/models/operations";

let value: GetEventsSinksData = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `sinkStatuses`          | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `sinks`                 | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |