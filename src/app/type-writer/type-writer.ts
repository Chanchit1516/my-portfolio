type QueueItem = () => Promise<void>;

interface TypewriterOptions {
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  element?: HTMLElement;
}

export default class Typewriter {
  #queue: QueueItem[] = [];
  #element: HTMLElement;
  #loop: boolean;
  #typingSpeed: number;
  #deletingSpeed: number;
  #activeInterval?: ReturnType<typeof setInterval>;
  #activeTimeout?: ReturnType<typeof setTimeout>;
  #stopped = false;

  constructor(
    parent: HTMLElement,
    {
      loop = false,
      typingSpeed = 50,
      deletingSpeed = 50,
      element = document.createElement('span')
    }: TypewriterOptions = {}
  ) {
    this.#element = element;
    this.#element.classList.add('typewriter-text');
    this.#element.style.cssText =
      'color: var(--color-accent-primary, #38bdf8); display: inline; font-weight: 700; font-family: var(--font-mono, monospace);';
    parent.append(this.#element);
    this.#loop = loop;
    this.#typingSpeed = typingSpeed;
    this.#deletingSpeed = deletingSpeed;
  }

  typeString(text: string): this {
    this.#addToQueue((resolve) => {
      if (this.#stopped || text.length === 0) {
        resolve();
        return;
      }

      let i = 0;
      this.#activeInterval = setInterval(() => {
        if (this.#stopped) {
          this.#clearActiveInterval();
          resolve();
          return;
        }

        this.#element.append(text[i]);
        i++;
        if (i >= text.length) {
          this.#clearActiveInterval();
          resolve();
        }
      }, this.#typingSpeed);
    });

    return this;
  }

  deleteChars(count: number): this {
    this.#addToQueue((resolve) => {
      if (this.#stopped || count <= 0) {
        resolve();
        return;
      }

      let i = 0;
      this.#activeInterval = setInterval(() => {
        if (this.#stopped) {
          this.#clearActiveInterval();
          resolve();
          return;
        }

        this.#element.innerText = this.#element.innerText.substring(
          0,
          this.#element.innerText.length - 1
        );
        i++;
        if (i >= count || this.#element.innerText.length === 0) {
          this.#clearActiveInterval();
          resolve();
        }
      }, this.#deletingSpeed);
    });

    return this;
  }

  deleteAll(deleteSpeed = this.#deletingSpeed): this {
    this.#addToQueue((resolve) => {
      if (this.#stopped || this.#element.innerText.length === 0) {
        resolve();
        return;
      }

      this.#activeInterval = setInterval(() => {
        if (this.#stopped) {
          this.#clearActiveInterval();
          resolve();
          return;
        }

        this.#element.innerText = this.#element.innerText.substring(
          0,
          this.#element.innerText.length - 1
        );
        if (this.#element.innerText.length === 0) {
          this.#clearActiveInterval();
          resolve();
        }
      }, deleteSpeed);
    });

    return this;
  }

  pauseFor(duration: number): this {
    this.#addToQueue((resolve) => {
      if (this.#stopped) {
        resolve();
        return;
      }

      this.#activeTimeout = setTimeout(() => {
        this.#activeTimeout = undefined;
        resolve();
      }, duration);
    });

    return this;
  }

  async start(): Promise<this> {
    let cb = this.#queue.shift();
    while (cb != null && !this.#stopped) {
      await cb();
      if (this.#stopped) {
        break;
      }
      if (this.#loop) {
        this.#queue.push(cb);
      }
      cb = this.#queue.shift();
    }

    return this;
  }

  stop(): void {
    this.#stopped = true;
    this.#queue = [];
    this.#clearActiveInterval();
    if (this.#activeTimeout !== undefined) {
      clearTimeout(this.#activeTimeout);
      this.#activeTimeout = undefined;
    }
  }

  #clearActiveInterval(): void {
    if (this.#activeInterval !== undefined) {
      clearInterval(this.#activeInterval);
      this.#activeInterval = undefined;
    }
  }

  #addToQueue(cb: (resolve: () => void) => void): void {
    this.#queue.push(() => new Promise(cb));
  }
}
