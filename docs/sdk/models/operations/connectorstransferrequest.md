# ConnectorsTransferRequest

## Example Usage

```typescript
import { ConnectorsTransferRequest } from "@formance/formance-sdk/sdk/models/operations";
import { Connector } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorsTransferRequest = {
  transferRequest: {
    amount: 100n,
    asset: "USD",
    destination: "acct_1Gqj58KZcSIg2N2q",
    source: "acct_1Gqj58KZcSIg2N2q",
  },
  connector: Connector.Stripe,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `transferRequest`                                                           | [payments.TransferRequest](../../../sdk/models/payments/transferrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connector`                                                                 | [payments.Connector](../../../sdk/models/payments/connector.md)             | :heavy_check_mark:                                                          | The name of the connector.                                                  |