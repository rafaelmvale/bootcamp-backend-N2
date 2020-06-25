"use strict";

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../../users/repositories/fakes/FakeUsersRepository"));

var _ListProvidersService = _interopRequireDefault(require("./ListProvidersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AppError from '@shared/errors/AppError';
let fakeUsersRepository;
let listProviders;
let fakeCacheProvider;
describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listProviders = new _ListProvidersService.default(fakeUsersRepository, fakeCacheProvider);
  });
  it('should be able to list providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    });
    const user2 = await fakeUsersRepository.create({
      name: 'John Tre',
      email: 'johntre@example.com',
      password: '123456'
    });
    const loggedUSer = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'johnqua@example.com',
      password: '123456'
    });
    const providers = await listProviders.execute({
      user_id: loggedUSer.id
    });
    expect(providers).toEqual([user1, user2]);
  });
});