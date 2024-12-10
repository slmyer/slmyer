#!/bin/bash

# 读取环境变量
PROJECT_DIR=${PROJECT_DIR:-"/slmyer/slmyer"}
REPO_URL=${REPO_URL:-"https://github.com/slmyer/slmyer.git"}
DOCKER_IMAGE_NAME=${DOCKER_IMAGE_NAME:-"slmyer-blog"}

# 检查项目目录是否存在，不存在则克隆仓库
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Project directory not found. Cloning repository..."
  git clone $REPO_URL $PROJECT_DIR
else
  cd $PROJECT_DIR || exit
  echo "Pulling latest changes..."
  git reset --hard
  git pull origin main
fi

# 拉取最新代码并构建 Docker 镜像
echo "Building Docker image..."
docker build -t $DOCKER_IMAGE_NAME .

# 停止并删除旧容器
echo "Stopping and removing old container..."
docker stop $DOCKER_IMAGE_NAME || true
docker $DOCKER_IMAGE_NAME || true

# 启动新容器
echo "Starting new container..."
docker run -d --name $DOCKER_IMAGE_NAME -p 80:3000 $DOCKER_IMAGE_NAME
