# GetEventsSinksResponseBody

Event sinks retrieved successfully.

## Example Usage

```typescript
import { GetEventsSinksResponseBody } from "@formance/formance-sdk/sdk/models/operations";

let value: GetEventsSinksResponseBody = {
  data: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [operations.GetEventsSinksData](../../../sdk/models/operations/geteventssinksdata.md)                   | :heavy_check_mark:                                                                                      | Configured sinks together with their per-sink status, at parity with the gRPC GetEventsSinks response.<br/> |