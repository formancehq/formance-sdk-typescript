# ConnectorConfigResponse

## Example Usage

```typescript
import { ConnectorConfigResponse } from "@formance/formance-sdk/sdk/models/shared";

let value: ConnectorConfigResponse = {
  data: {
    apiKey: "XXX",
    clientID: "XXX",
    endpoint: "XXX",
    name: "My MangoPay Account",
    pollingPeriod: "60s",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `data`                   | *shared.ConnectorConfig* | :heavy_check_mark:       | N/A                      |