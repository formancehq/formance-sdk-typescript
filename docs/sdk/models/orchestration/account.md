# Account

## Example Usage

```typescript
import { Account } from "@formance/formance-sdk/sdk/models/orchestration";

let value: Account = {
  address: "users:001",
  effectiveVolumes: {
    "USD": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
    "EUR": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
  },
  metadata: {
    "admin": "true",
  },
  volumes: {
    "USD": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
    "EUR": {
      balance: 90n,
      input: 100n,
      output: 10n,
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | users:001                                                                                                      |
| `effectiveVolumes`                                                                                             | Record<string, [orchestration.Volume](../../../sdk/models/orchestration/volume.md)>                            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |
| `metadata`                                                                                                     | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | {<br/>"admin": "true"<br/>}                                                                                    |
| `volumes`                                                                                                      | Record<string, [orchestration.Volume](../../../sdk/models/orchestration/volume.md)>                            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            | {<br/>"USD": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>},<br/>"EUR": {<br/>"input": 100,<br/>"output": 10,<br/>"balance": 90<br/>}<br/>} |