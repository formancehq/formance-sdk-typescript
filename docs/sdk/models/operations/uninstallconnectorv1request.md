# UninstallConnectorV1Request

## Example Usage

```typescript
import { UninstallConnectorV1Request } from "@formance/formance-sdk/sdk/models/operations";

let value: UninstallConnectorV1Request = {
  connector: "CURRENCY-CLOUD",
  connectorId: "XXX",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |                                                                 |
| `connectorId`                                                   | *string*                                                        | :heavy_check_mark:                                              | The connector ID.                                               | XXX                                                             |