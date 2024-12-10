# 第一阶段：构建应用
FROM node:18-alpine AS build

WORKDIR /app

# 复制 package.json 和 package-lock.json 文件并安装依赖
COPY package*.json ./
RUN npm install

# 复制整个项目代码
COPY . .

# 构建 Next.js 应用（此时会生成 `.next` 文件夹）
RUN npm run build

# 第二阶段：运行应用
FROM node:18-alpine

WORKDIR /app

# 将构建后的文件从第一阶段复制到第二阶段
COPY --from=build /app ./

# 安装生产环境的依赖
RUN npm install --only=production

# 设置环境变量（可选
ENV PORT=3000

# 暴露应用的端口
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "start"]
