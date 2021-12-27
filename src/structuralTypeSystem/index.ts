type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    )
};

const bdUser = { username: 'leo', password: '123' };
const sentUser = { username: 'leo', password: '123' };
const loggerIn = verifyUser(bdUser, sentUser);
console.log(loggerIn)