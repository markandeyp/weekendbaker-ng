import { CountService } from './count.service';

fdescribe('CountService', () => {
  let service: CountService;
  beforeAll(() => {
    service = new CountService();
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('should set counter', () => {
    service.setCounter(10);
    expect(service.count).toBe(10);
  });

  it('should get counter', () => {
    let counter = service.getCounter();
    expect(counter).toBe(service.count);
  });
});
