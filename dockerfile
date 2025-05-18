FROM node:23-alpine

WORKDIR /app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres"

RUN DATABASE_URL="postgresql://postgres:mysecretpassword@postgres:5432/postgres" 

RUN npx prisma generate
RUN npm run build

CMD ["sh", "-c", "npx prisma db push && npm start"]
