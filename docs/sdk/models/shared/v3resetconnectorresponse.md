# V3ResetConnectorResponse

## Example Usage

```typescript
import { V3ResetConnectorResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: V3ResetConnectorResponse = {
  data: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                | *string*                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                    | Since this call is asynchronous, the response will contain the ID of the task that was created to reset the connector. You can use the task API to check the status of the task and get the results.<br/> |