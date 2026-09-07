# DummyPayConfig

## Example Usage

```typescript
import { DummyPayConfig } from "@formance/formance-sdk/sdk/models/payments";

let value: DummyPayConfig = {
  directory: "/tmp/dummypay",
  filePollingPeriod: "60s",
  name: "My DummyPay Account",
  provider: "Dummypay",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `directory`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Filesystem directory the connector reads payment files from                                   | /tmp/dummypay                                                                                 |
| `filePollingPeriod`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The frequency at which the connector will try to fetch new payment objects from the directory | 60s                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable name identifying this connector instance                                       | My DummyPay Account                                                                           |
| `numberOfAccountsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | How many synthetic accounts to create on startup                                              |                                                                                               |
| `numberOfPaymentsPreGenerated`                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | How many synthetic payments to create on startup                                              |                                                                                               |
| `prefixFileToIngest`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Only ingest files whose name starts with this prefix                                          |                                                                                               |
| `provider`                                                                                    | *"Dummypay"*                                                                                  | :heavy_check_mark:                                                                            | Identifies the payment provider this configuration targets                                    |                                                                                               |