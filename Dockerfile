# 第一阶段：构建应用
FROM node:18-alpine AS build

FROM build AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# 复制 package.json 和 package-lock.json 文件并安装依赖
COPY package*.json ./
RUN npm ci

# 复制整个项目代码
COPY . .

# 构建 Next.js 应用（此时会生成 `.next` 文件夹）
RUN npm run build

# 第二阶段：运行应用
FROM build

WORKDIR /app

# 将构建后的文件从第一阶段复制到第二阶段
COPY --from=build /app ./

# 安装生产环境的依赖
RUN npm install --only=production

# 启动 Next.js 应用
CMD ["npm", "start"]
