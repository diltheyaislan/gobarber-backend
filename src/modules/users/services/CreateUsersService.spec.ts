import AppError from '@shared/errors/AppError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeCacheProvider: FakeCacheProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'diltheyaislan@gmail.com',
      name: 'Dilthey Aislan',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('diltheyaislan@gmail.com');
  });

  it('should not be able to create two users with the same email', async () => {
    await createUser.execute({
      email: 'diltheyaislan@gmail.com',
      name: 'Dilthey Aislan',
      password: '123456',
    });

    await expect(
      createUser.execute({
        email: 'diltheyaislan@gmail.com',
        name: 'Dilthey Lopes',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
