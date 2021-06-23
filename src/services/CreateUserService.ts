import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest){
        const usersRepository =  getCustomRepository(UsersRepositories);

        if(!name){
            throw new Error("Name invalid");
        }

        if(!email){
            throw new Error("Email invalid");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if(userAlreadyExists){
            throw new Error("User aready exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };