# UpdateConnectorConfigV1Request

## Example Usage

```typescript
import { UpdateConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: UpdateConnectorConfigV1Request = {
  connectorConfig: {
    apiKey: "XXX",
    hmacKey: "XXX",
    liveEndpointPrefix: "XXX",
    name: "My Adyen Account",
    pollingPeriod: "60s",
  },
  connector: Connector.Mangopay,
  connectorId: "XXX",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connectorConfig`                                           | *shared.ConnectorConfig*                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `connectorId`                                               | *string*                                                    | :heavy_check_mark:                                          | The connector ID.                                           | XXX                                                         |