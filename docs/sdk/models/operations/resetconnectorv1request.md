# ResetConnectorV1Request

## Example Usage

```typescript
import { ResetConnectorV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: ResetConnectorV1Request = {
  connector: Connector.Wise,
  connectorId: "XXX",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `connectorId`                                               | *string*                                                    | :heavy_check_mark:                                          | The connector ID.                                           | XXX                                                         |