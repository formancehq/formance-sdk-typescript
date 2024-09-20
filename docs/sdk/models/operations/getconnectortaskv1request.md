# GetConnectorTaskV1Request

## Example Usage

```typescript
import { GetConnectorTaskV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: GetConnectorTaskV1Request = {
  connector: Connector.Adyen,
  connectorId: "XXX",
  taskId: "task1",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `connectorId`                                               | *string*                                                    | :heavy_check_mark:                                          | The connector ID.                                           | XXX                                                         |
| `taskId`                                                    | *string*                                                    | :heavy_check_mark:                                          | The task ID.                                                | task1                                                       |