# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app

# Copy package files and install all dependencies (including dev)
COPY package*.json .
RUN npm install

# Copy the rest of the code and run the build
COPY . .
RUN npm run build

# Stage 2: Run
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]