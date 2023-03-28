FROM node:16.15.0-alpine

WORKDIR /opt/backend

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent

COPY . .

EXPOSE 5000

CMD npm run start