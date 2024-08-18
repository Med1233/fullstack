FROM node:18-alpine

WORKDIR /frontend

COPY package*.json .

COPY pnpm-lock.yaml .

RUN npm i -g pnpm

RUN pnpm i 

COPY . .

EXPOSE 3000

CMD [ "pnpm", "dev" ]