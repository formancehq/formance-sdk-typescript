# ResumeActivityRequest

## Example Usage

```typescript
import { ResumeActivityRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ResumeActivityRequest = {
  requestBody: {
    pausedAt: new Date("2026-08-29T20:03:10.751Z"),
    temporalRunID: "<id>",
  },
  activityID: "<id>",
  instanceID: "<id>",
  number: 907232,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                       | [operations.ResumeActivityRequestBody](../../../sdk/models/operations/resumeactivityrequestbody.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `activityID`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The paused activity id                                                                              |
| `instanceID`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | The instance id                                                                                     |
| `number`                                                                                            | *number*                                                                                            | :heavy_check_mark:                                                                                  | The nonnegative stage number                                                                        |