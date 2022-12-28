import { IStack } from "./types";

export class Stack<T> implements IStack<T> {
  private storage: T[] = [];
  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw new Error(
        "Stack has reached max capacity. Cannot add any more items"
      );
    }
    this.storage.push(item);
  }
  pop(): T | undefined {
    return this.storage.pop();
  }

  size(): number {
    return this.storage.length;
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }
}
