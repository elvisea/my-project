export interface IGenericRepository<T> {
  create(data: T): Promise<T>;
  findByEmail(email: string): Promise<T | null>;
}
