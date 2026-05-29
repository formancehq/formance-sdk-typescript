# UpdateConnectorConfigV1Request

## Example Usage

```typescript
import { UpdateConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/payments";

let value: UpdateConnectorConfigV1Request = {
  connectorConfig: {
    apiKey: "XXX",
    name: "My Wise Account",
    pollingPeriod: "120m",
    provider: "Wise",
  },
  connector: Connector.Modulr,
  connectorId: "XXX",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connectorConfig`                                               | *payments.ConnectorConfig*                                      | :heavy_check_mark:                                              | N/A                                                             |                                                                 |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |                                                                 |
| `connectorId`                                                   | *string*                                                        | :heavy_check_mark:                                              | The connector ID.                                               | XXX                                                             |