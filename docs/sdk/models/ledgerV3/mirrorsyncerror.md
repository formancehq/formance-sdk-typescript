# MirrorSyncError

Most recent mirror sync error (null if healthy)

## Example Usage

```typescript
import { MirrorSyncError } from "@formance/formance-sdk/sdk/models/ledgerV3";

let value: MirrorSyncError = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message                                                                                 |
| `occurredAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the error occurred                                                                       |