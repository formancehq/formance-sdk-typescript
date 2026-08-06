# UninstallConnectorRequest

## Example Usage

```typescript
import { UninstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: UninstallConnectorRequest = {
  connector: "STRIPE",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |