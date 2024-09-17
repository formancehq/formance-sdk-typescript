# InstallConnectorRequest

## Example Usage

```typescript
import { InstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: InstallConnectorRequest = {
  connectorConfig: {
    authorizationEndpoint: "XXX",
    endpoint: "XXX",
    name: "My Banking Circle Account",
    password: "XXX",
    pollingPeriod: "60s",
    userCertificate: "XXX",
    userCertificateKey: "XXX",
    username: "XXX",
  },
  connector: Connector.Generic,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connectorConfig`                                           | *shared.ConnectorConfig*                                    | :heavy_check_mark:                                          | N/A                                                         |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |