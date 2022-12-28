import { IQueue } from "./types";

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];
  constructor(private capacity: number = Infinity) {}

  size(): number {
    return this.storage.length;
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw new Error(
        "Queue has reached max capacity. Cannot add any more items"
      );
    }
    this.storage.push(item);
  }
}
