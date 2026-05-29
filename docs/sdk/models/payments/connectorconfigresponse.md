# ConnectorConfigResponse

OK

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorConfigResponse = {
  connectorConfig: {
    apiKey: "XXX",
    endpoint: "XXX",
    loginID: "XXX",
    name: "My CurrencyCloud Account",
    pollingPeriod: "60s",
    provider: "Currencycloud",
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `connectorConfig`          | *payments.ConnectorConfig* | :heavy_check_mark:         | N/A                        |