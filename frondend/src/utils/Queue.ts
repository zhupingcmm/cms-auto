class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
}

const queue = new Queue<number>();
queue.push(1);

class Utility {
  reverse = <D>(items: D[]): D[] => {
    const result = [];
    for (let i = 0; i < items.length; i++) {
      result.push(items[i]);
    }

    return result;
  };
}
