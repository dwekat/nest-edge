# Nest-Edge

Edge templating engine implementation for Nest.Js


## How to use

Install the package

```bash
npm i nest-edge
```

Use inside `main.ts`of your Nest application.

```typescript
// main.ts

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { nestEdge } from 'nest-edge';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const engine = nestEdge({
    viewsRoot: join(__dirname, '..', 'views'),
    options: {
      cache: process.env.NODE_ENV === 'production',
    },
  });

  app.engine('edge', engine);
  app.setViewEngine('edge');
  await app.listen(3000);
}

bootstrap();

```
