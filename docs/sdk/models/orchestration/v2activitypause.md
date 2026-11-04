# V2ActivityPause

Current pause of an activity in an active stage, read from Temporal on instance detail requests

## Example Usage

```typescript
import { V2ActivityPause } from "@formance/formance-sdk/sdk/models/orchestration";

let value: V2ActivityPause = {
  activityID: "<id>",
  attempt: 410485,
  name: "<value>",
  temporalRunID: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `activityID`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Stable activity identifier within the owning workflow execution                                                          |
| `attempt`                                                                                                                | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Current attempt counter reported by Temporal                                                                             |
| `lastFailure`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Message of the most recent failed attempt, when available                                                                |
| `lastFailureType`                                                                                                        | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Application failure type of the most recent failed attempt, when available                                               |
| `maxAttempts`                                                                                                            | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Attempt limit decoded from an ACTIVITY_ATTEMPT_LIMIT:<limit> pause reason, when valid                                    |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Activity type name                                                                                                       |
| `pausedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | Pause timestamp reported by Temporal, when available; send this value with temporalRunID to resume this pause generation |
| `reason`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Reason recorded by Temporal for this pause, when available                                                               |
| `temporalRunID`                                                                                                          | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Run identifier of the described stage workflow execution                                                                 |