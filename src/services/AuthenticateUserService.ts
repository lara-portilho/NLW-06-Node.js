import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserService {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserService) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect.");
        }

        const token = sign({
            email: user.email
        }, "76f21e895b6a2dbc4986b03167809287", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService };