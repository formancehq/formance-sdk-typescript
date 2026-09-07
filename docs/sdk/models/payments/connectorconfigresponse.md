# ConnectorConfigResponse

OK

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/payments";

let value: ConnectorConfigResponse = {
  data: {
    directory: "/tmp/dummypay",
    filePollingPeriod: "60s",
    name: "My DummyPay Account",
    provider: "Dummypay",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | *payments.ConnectorConfig*                                       | :heavy_check_mark:                                               | A connector's configuration, whose shape depends on the provider |