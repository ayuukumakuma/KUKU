# ワーカー数を指定するとclustered modeになる,worker数=CPUコア数、
# clustered mode = masterプロセス1つ + workerプロセス複数
workers Integer(ENV.fetch("WEB_CONCURRENCY") { 2 })
# スレッド数
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count
# 全てのアプリコードをfork前にロード,メモリ使用量が下がる
preload_app!

rackup      DefaultRackup
port        ENV.fetch("PORT") { 3000 }
environment ENV.fetch("RAILS_ENV") { "development" }

# 各ワーカーのboot前の処理,DB接続やpuma特有の処理など
on_worker_boot do
  ActiveRecord::Base.establish_connection
end

# puma-herokuっていうheroku向けのものもあるらしい