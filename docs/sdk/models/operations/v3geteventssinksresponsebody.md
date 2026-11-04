# V3GetEventsSinksResponseBody

Event sinks retrieved successfully.

## Example Usage

```typescript
import { V3GetEventsSinksResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetEventsSinksResponseBody = {
  data: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [operations.V3GetEventsSinksData](../../../sdk/models/operations/v3geteventssinksdata.md)               | :heavy_check_mark:                                                                                      | Configured sinks together with their per-sink status, at parity with the gRPC GetEventsSinks response.<br/> |