# ForwardBankAccountRequest

## Example Usage

```typescript
import { ForwardBankAccountRequest } from "@formance/formance-sdk/sdk/models/payments";

let value: ForwardBankAccountRequest = {
  connectorID: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `connectorID`                                              | *string*                                                   | :heavy_check_mark:                                         | Identifier of the connector to forward the bank account to |