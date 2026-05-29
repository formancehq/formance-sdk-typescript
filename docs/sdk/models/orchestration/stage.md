# Stage


## Supported Types

### `orchestration.StageSend`

```typescript
const value: orchestration.StageSend = {
  stageSendDestination: {
    stageSendDestinationPayment: {
      psp: "stripe",
      type: StageSendDestinationPaymentType.Payout,
    },
    stageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
  stageSendSource: {
    stageSendSourceAccount: {
      allowOverdraft: true,
      id: "<id>",
      throughAccount: "liabilities:payouts-pending",
    },
  },
};
```

### `orchestration.StageDelay`

```typescript
const value: orchestration.StageDelay = {};
```

### `orchestration.StageWaitEvent`

```typescript
const value: orchestration.StageWaitEvent = {
  event: "<value>",
};
```

### `orchestration.Update`

```typescript
const value: orchestration.Update = {};
```

