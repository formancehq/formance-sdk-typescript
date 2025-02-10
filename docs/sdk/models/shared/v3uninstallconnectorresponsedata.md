# V3UninstallConnectorResponseData

## Example Usage

```typescript
import { V3UninstallConnectorResponseData } from "@formance/formance-sdk/sdk/models/shared";

let value: V3UninstallConnectorResponseData = {
  taskID: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskID`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                        | Since this call is asynchronous, the response will contain the ID of the task that was created to uninstall the connector. You can use the task API to check the status of the task and get the results.<br/> |