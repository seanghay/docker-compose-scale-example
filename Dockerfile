FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY main.js .

CMD ["node", "main.js"]
