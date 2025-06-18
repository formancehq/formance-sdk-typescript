# DebitWalletRequest

## Example Usage

```typescript
import { DebitWalletRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: DebitWalletRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `debitWalletRequest`                                                                          | [shared.DebitWalletRequest](../../../sdk/models/shared/debitwalletrequest.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"amount": {<br/>"asset": "USD/2",<br/>"amount": 100<br/>},<br/>"metadata": {<br/>"key": ""<br/>},<br/>"pending": true<br/>} |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Use an idempotency key                                                                        |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |