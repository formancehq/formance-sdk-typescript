# InstallConnectorRequest

## Example Usage

```typescript
import { InstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/payments";

let value: InstallConnectorRequest = {
  connectorConfig: {
    authorizationEndpoint: "XXX",
    endpoint: "XXX",
    name: "My Banking Circle Account",
    password: "XXX",
    pollingPeriod: "120m",
    provider: "Bankingcircle",
    userCertificate: "XXX",
    userCertificateKey: "XXX",
    username: "XXX",
  },
  connector: Connector.Wise,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorConfig`                                               | *payments.ConnectorConfig*                                      | :heavy_check_mark:                                              | N/A                                                             |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |