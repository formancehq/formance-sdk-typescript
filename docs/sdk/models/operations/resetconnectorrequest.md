# ResetConnectorRequest

## Example Usage

```typescript
import { ResetConnectorRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: ResetConnectorRequest = {
  connector: "ADYEN",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `connector`                                                     | [payments.Connector](../../../sdk/models/payments/connector.md) | :heavy_check_mark:                                              | The name of the connector.                                      |