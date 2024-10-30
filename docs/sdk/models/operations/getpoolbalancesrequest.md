# GetPoolBalancesRequest

## Example Usage

```typescript
import { GetPoolBalancesRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: GetPoolBalancesRequest = {
  at: new Date("2024-06-27T04:59:29.330Z"),
  poolId: "XXX",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Filter balances by date.<br/>                                                                 |                                                                                               |
| `poolId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The pool ID.                                                                                  | XXX                                                                                           |