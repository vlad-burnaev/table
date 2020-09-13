FROM node:12-alpine as builder

# Stage 1
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

# Stage 2
FROM nginx:1.19.2-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
