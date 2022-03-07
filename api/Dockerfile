FROM ruby:2.7.1-alpine
# ビルド時にDockerに渡す変数
ARG WORKDIR
# 永続的な環境変数の設定
ENV RUNTIME_PACKAGES="linux-headers libxml2-dev make yarn gcc g++ libc-dev nodejs tzdata postgresql-dev postgresql git" \
    # ビルド時のみ必要なパッケージ
    DEV_PACKAGES="build-base curl-dev" \
    HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo
# 作業ディレクトリを設定
WORKDIR ${HOME}
# コンテナにコピーする
COPY Gemfile* ./
# コマンドを実行してパッケージをコンテナにインストール
RUN apk update && \
    apk upgrade && \
    # --no-cacheで不要なファイルを削除してくれる
    apk add --no-cache ${RUNTIME_PACKAGES} && \
    # --virtualで名前を付けて一括管理できる
    apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    # 並列処理をして実行速度が速くなる
    bundle install -j4 && \
    # ビルド後は削除
    apk del build-dependencies
# ルートディレクトリをまんまコンテナにコピー
COPY . .
# docker run時に実行するデフォルト処理
CMD ["rails", "server", "-b", "0.0.0.0"]
