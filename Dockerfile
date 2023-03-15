## Build the app first
FROM node:18-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build
## Then copy the build to the production image
FROM node:18-alpine
WORKDIR /usr
COPY package.json ./
COPY public ./public
RUN npm install --omit=dev
COPY --from=0 /usr/dist .
EXPOSE 3000
CMD ["node","app.js"]