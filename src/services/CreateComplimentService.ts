import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tagExists = await tagsRepositories.findOne(tag_id);

        if (!tagExists) {
            throw new Error("Tag does not exist");
        }

        if (user_sender === user_receiver) {
            throw new Error("User receiver and sender cannot be the same");
        }

        const userRecieverExists = await usersRepositories.findOne(user_receiver);

        if (!userRecieverExists) {
            throw new Error("User Receiver does not exist");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliment)

        return compliment;
    }
}

export { CreateComplimentService };