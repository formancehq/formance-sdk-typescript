# UninstallConnectorRequest

## Example Usage

```typescript
import { UninstallConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/payments";

let value: UninstallConnectorRequest = {
  connector: Connector.Stripe,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |