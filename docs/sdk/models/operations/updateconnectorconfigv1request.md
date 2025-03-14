# UpdateConnectorConfigV1Request

## Example Usage

```typescript
import { UpdateConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: UpdateConnectorConfigV1Request = {
  connectorConfig: {
    apiKey: "XXX",
    apiSecret: "XXX",
    endpoint: "XXX",
    name: "My Modulr Account",
    pollingPeriod: "120s",
  },
  connector: Connector.BankingCircle,
  connectorId: "XXX",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connectorConfig`                                           | *shared.ConnectorConfig*                                    | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `connectorId`                                               | *string*                                                    | :heavy_check_mark:                                          | The connector ID.                                           | XXX                                                         |