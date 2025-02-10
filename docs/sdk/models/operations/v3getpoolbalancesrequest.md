# V3GetPoolBalancesRequest

## Example Usage

```typescript
import { V3GetPoolBalancesRequest } from "@formance/formance-sdk/sdk/models/operations";

let value: V3GetPoolBalancesRequest = {
  poolID: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time to filter by                                                                         |
| `poolID`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The pool ID                                                                                   |