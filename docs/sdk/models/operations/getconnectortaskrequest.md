# GetConnectorTaskRequest

## Example Usage

```typescript
import { GetConnectorTaskRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: GetConnectorTaskRequest = {
  connector: Connector.BankingCircle,
  taskId: "task1",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `taskId`                                                    | *string*                                                    | :heavy_check_mark:                                          | The task ID.                                                | task1                                                       |