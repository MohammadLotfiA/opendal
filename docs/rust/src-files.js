var srcIndex=new Map(JSON.parse('[["opendal",["",[["docs",[["comparisons",[],["mod.rs"]],["internals",[],["accessor.rs","layer.rs","mod.rs"]],["rfcs",[],["mod.rs"]]],["concepts.rs","mod.rs"]],["layers",[],["async_backtrace.rs","await_tree.rs","blocking.rs","chaos.rs","complete.rs","concurrent_limit.rs","dtrace.rs","error_context.rs","fastrace.rs","immutable_index.rs","logging.rs","metrics.rs","mod.rs","oteltrace.rs","prometheus.rs","prometheus_client.rs","retry.rs","throttle.rs","timeout.rs","tracing.rs","type_eraser.rs"]],["raw",[["adapters",[["kv",[],["api.rs","backend.rs","mod.rs"]],["typed_kv",[],["api.rs","backend.rs","mod.rs"]]],["mod.rs"]],["http_util",[],["body.rs","bytes_content_range.rs","bytes_range.rs","client.rs","error.rs","header.rs","mod.rs","multipart.rs","uri.rs"]],["oio",[["buf",[],["flex_buf.rs","mod.rs","pooled_buf.rs","queue_buf.rs"]],["list",[],["api.rs","flat_list.rs","hierarchy_list.rs","mod.rs","page_list.rs","prefix_list.rs"]],["read",[],["api.rs","mod.rs"]],["write",[],["api.rs","append_write.rs","block_write.rs","mod.rs","multipart_write.rs","one_shot_write.rs","position_write.rs","range_write.rs"]]],["entry.rs","mod.rs"]],["tests",[],["mod.rs","read.rs","utils.rs","write.rs"]]],["accessor.rs","atomic_util.rs","chrono_util.rs","enum_utils.rs","futures_util.rs","layer.rs","mod.rs","operation.rs","ops.rs","path.rs","path_cache.rs","rps.rs","serde_util.rs","std_io_util.rs","tokio_util.rs","version.rs"]],["services",[["aliyun_drive",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["alluxio",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["atomicserver",[],["backend.rs","mod.rs"]],["azblob",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["azdls",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["azfile",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["b2",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["cacache",[],["backend.rs","mod.rs"]],["chainsafe",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["cloudflare_kv",[],["backend.rs","error.rs","mod.rs"]],["compfs",[],["backend.rs","core.rs","lister.rs","mod.rs","reader.rs","writer.rs"]],["cos",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["d1",[],["backend.rs","error.rs","mod.rs","model.rs"]],["dashmap",[],["backend.rs","mod.rs"]],["dbfs",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["dropbox",[],["backend.rs","builder.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["etcd",[],["backend.rs","mod.rs"]],["foundationdb",[],["backend.rs","mod.rs"]],["fs",[],["backend.rs","core.rs","lister.rs","mod.rs","reader.rs","writer.rs"]],["ftp",[],["backend.rs","err.rs","lister.rs","mod.rs","reader.rs","writer.rs"]],["gcs",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","uri.rs","writer.rs"]],["gdrive",[],["backend.rs","builder.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["ghac",[],["backend.rs","error.rs","mod.rs","writer.rs"]],["github",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["gridfs",[],["backend.rs","mod.rs"]],["hdfs",[],["backend.rs","lister.rs","mod.rs","reader.rs","writer.rs"]],["hdfs_native",[],["backend.rs","error.rs","lister.rs","mod.rs","reader.rs","writer.rs"]],["http",[],["backend.rs","error.rs","mod.rs"]],["huggingface",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs"]],["icloud",[],["backend.rs","core.rs","mod.rs"]],["ipfs",[],["backend.rs","error.rs","ipld.rs","mod.rs"]],["ipmfs",[],["backend.rs","builder.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["koofr",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["libsql",[],["backend.rs","error.rs","mod.rs"]],["memcached",[],["backend.rs","binary.rs","mod.rs"]],["memory",[],["backend.rs","mod.rs"]],["mini_moka",[],["backend.rs","mod.rs"]],["moka",[],["backend.rs","mod.rs"]],["mongodb",[],["backend.rs","mod.rs"]],["monoiofs",[],["backend.rs","mod.rs"]],["mysql",[],["backend.rs","mod.rs"]],["obs",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["onedrive",[],["backend.rs","builder.rs","error.rs","graph_model.rs","lister.rs","mod.rs","writer.rs"]],["oss",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["pcloud",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["persy",[],["backend.rs","mod.rs"]],["postgresql",[],["backend.rs","mod.rs"]],["redb",[],["backend.rs","mod.rs"]],["redis",[],["backend.rs","mod.rs"]],["rocksdb",[],["backend.rs","mod.rs"]],["s3",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["seafile",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["sftp",[],["backend.rs","error.rs","lister.rs","mod.rs","reader.rs","utils.rs","writer.rs"]],["sled",[],["backend.rs","mod.rs"]],["sqlite",[],["backend.rs","mod.rs"]],["supabase",[],["backend.rs","core.rs","error.rs","mod.rs","writer.rs"]],["surrealdb",[],["backend.rs","mod.rs"]],["swift",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["tikv",[],["backend.rs","mod.rs"]],["upyun",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["vercel_artifacts",[],["backend.rs","builder.rs","error.rs","mod.rs","writer.rs"]],["vercel_blob",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["webdav",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]],["webhdfs",[],["backend.rs","error.rs","lister.rs","message.rs","mod.rs","writer.rs"]],["yandex_disk",[],["backend.rs","core.rs","error.rs","lister.rs","mod.rs","writer.rs"]]],["mod.rs"]],["types",[["blocking_read",[],["blocking_reader.rs","buffer_iterator.rs","mod.rs","std_bytes_iterator.rs","std_reader.rs"]],["blocking_write",[],["blocking_writer.rs","mod.rs","std_writer.rs"]],["context",[],["mod.rs","read.rs","write.rs"]],["execute",[["executors",[],["mod.rs","tokio_executor.rs"]]],["api.rs","executor.rs","mod.rs"]],["operator",[],["blocking_operator.rs","builder.rs","metadata.rs","mod.rs","operator.rs","operator_functions.rs","operator_futures.rs"]],["read",[],["buffer_stream.rs","futures_async_reader.rs","futures_bytes_stream.rs","mod.rs","reader.rs"]],["write",[],["buffer_sink.rs","futures_async_writer.rs","futures_bytes_sink.rs","mod.rs","writer.rs"]]],["buffer.rs","builder.rs","capability.rs","entry.rs","error.rs","list.rs","metadata.rs","mod.rs","mode.rs","scheme.rs"]]],["lib.rs"]]]]'));createSrcSidebar();