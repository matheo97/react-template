import axios from "../base";

export class CounterService {
  private url = "/v1/counter";

  async getCounter(): Promise<void> {
    await axios.post<string>(`${this.url}`);
  }
}

export const counterService = new CounterService();
