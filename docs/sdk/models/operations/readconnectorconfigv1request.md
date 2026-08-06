# ReadConnectorConfigV1Request

## Example Usage

```typescript
import { ReadConnectorConfigV1Request } from "@formance/formance-sdk/sdk/models/operations";

let value: ReadConnectorConfigV1Request = {
  connector: "STRIPE",
  connectorId: "XXX",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |                                                                 |
| `connectorId`                                                   | *string*                                                        | :heavy_check_mark:                                              | The connector ID.                                               | XXX                                                             |