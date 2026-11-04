# V2ResumeActivityRequest

## Example Usage

```typescript
import { V2ResumeActivityRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V2ResumeActivityRequest = {
  requestBody: {
    pausedAt: new Date("2025-09-15T09:35:01.729Z"),
    temporalRunID: "<id>",
  },
  activityID: "<id>",
  instanceID: "<id>",
  number: 540501,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                           | [operations.V2ResumeActivityRequestBody](../../../sdk/models/operations/v2resumeactivityrequestbody.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `activityID`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The paused activity id                                                                                  |
| `instanceID`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The instance id                                                                                         |
| `number`                                                                                                | *number*                                                                                                | :heavy_check_mark:                                                                                      | The nonnegative stage number                                                                            |