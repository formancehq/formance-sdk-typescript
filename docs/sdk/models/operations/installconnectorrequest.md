# InstallConnectorRequest

## Example Usage

```typescript
import { InstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: InstallConnectorRequest = {
  connectorConfig: {
    apiKey: "XXX",
    endpoint: "XXX",
    name: "My Generic Account",
    pollingPeriod: "120m",
    provider: "Generic",
  },
  connector: "WISE",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorConfig`                                               | *payments.ConnectorConfig*                                      | :heavy_check_mark:                                              | N/A                                                             |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |