# build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # ensure this outputs to dist/<app-name>

# runtime stage
FROM nginx:stable
COPY --from=builder /app/dist/<your-app-folder> /usr/share/nginx/html
# optional: replace default nginx.conf if you need SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
