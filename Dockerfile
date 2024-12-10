# 第一阶段：构建 Next.js 应用
FROM node:18-alpine AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json，并安装依赖
COPY package.json package-lock.json ./
RUN npm install

# 复制代码并构建
COPY . ./
RUN npm run build

# 第二阶段：运行生产环境
FROM node:18-alpine

WORKDIR /app

# 复制构建结果
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# 配置容器端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
