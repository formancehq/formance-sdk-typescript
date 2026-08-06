# UpdateConnectorConfigV1Request

## Example Usage

```typescript
import { UpdateConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";

let value: UpdateConnectorConfigV1Request = {
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
  connector: "MODULR",
  connectorId: "XXX",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorConfig`                                               | *payments.ConnectorConfig*                                      | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |                                                                 |
| `connectorId`                                                   | *string*                                                        | :heavy_check_mark:                                              | The connector ID.                                               | XXX                                                             |