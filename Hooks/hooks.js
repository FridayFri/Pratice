function dispatchAction(queue, action) {
  // 创建update
  const update = {
    action,
    next: null,
  };

  // 环状单向链表
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;

  // 调度更新
  schedule();
}
