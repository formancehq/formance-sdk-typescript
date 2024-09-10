# ReadConnectorConfigV1Request

## Example Usage

```typescript
import { ReadConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/shared";

let value: ReadConnectorConfigV1Request = {
  connector: Connector.Mangopay,
  connectorId: "XXX",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `connector`                                                 | [shared.Connector](../../../sdk/models/shared/connector.md) | :heavy_check_mark:                                          | The name of the connector.                                  |                                                             |
| `connectorId`                                               | *string*                                                    | :heavy_check_mark:                                          | The connector ID.                                           | XXX                                                         |