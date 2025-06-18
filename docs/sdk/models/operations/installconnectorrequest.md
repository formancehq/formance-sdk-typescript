# InstallConnectorRequest

## Example Usage

```typescript
import { InstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: InstallConnectorRequest = {
  connector: Connector.Wise,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connectorConfig`                                           | *shared.ConnectorConfig*                                    | :heavy_check_mark:                                          | N/A                                                         |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |