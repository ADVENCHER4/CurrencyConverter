export interface Dictionary<T> {
  [Key: string]: T;
}

export class Response {
  constructor(
    public conversion_rates: Dictionary<number>,
  ) {}
}
