# ReconciliationRequest

## Example Usage

```typescript
import { ReconciliationRequest } from "@formance/formance-sdk/sdk/models/reconciliation";

let value: ReconciliationRequest = {
  reconciledAtLedger: new Date("2021-01-01T00:00:00.000Z"),
  reconciledAtPayments: new Date("2021-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `reconciledAtLedger`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time at which the ledger side is evaluated                                           | 2021-01-01T00:00:00.000Z                                                                      |
| `reconciledAtPayments`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time at which the payments side is evaluated                                         | 2021-01-01T00:00:00.000Z                                                                      |