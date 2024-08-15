# TasksCursorData

## Example Usage

```typescript
import { PaymentStatus, TasksCursorData } from "@formance/formance-sdk/sdk/models/shared";

let value: TasksCursorData = {
    connectorID: "<value>",
    createdAt: new Date("2023-06-23T08:33:07.992Z"),
    descriptor: {},
    id: "b114eeb5-2ff7-485f-8378-14d4c98e0c2b",
    state: {},
    status: PaymentStatus.Dispute,
    updatedAt: new Date("2023-09-05T20:30:25.728Z"),
};
```

## Supported Types

### `shared.TaskStripe`

```typescript
const value: shared.TaskStripe = /* values here */
```

### `shared.TaskWise`

```typescript
const value: shared.TaskWise = /* values here */
```

### `shared.TaskCurrencyCloud`

```typescript
const value: shared.TaskCurrencyCloud = /* values here */
```

### `shared.TaskDummyPay`

```typescript
const value: shared.TaskDummyPay = /* values here */
```

### `shared.TaskModulr`

```typescript
const value: shared.TaskModulr = /* values here */
```

### `shared.TaskBankingCircle`

```typescript
const value: shared.TaskBankingCircle = /* values here */
```

### `shared.TaskMangoPay`

```typescript
const value: shared.TaskMangoPay = /* values here */
```

### `shared.TaskMoneycorp`

```typescript
const value: shared.TaskMoneycorp = /* values here */
```

