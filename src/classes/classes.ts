export class Name {
    public readonly name: string = 'leo';

    constructor(name: string) {
        this.name = name;
    }
}

export class GitHub {
    public readonly github: string = 'inex1stent';

    constructor(github: string) {
        this.github = github;
    }
}

const about = new Name('leo');
const github = new GitHub('inex1stent');
console.log(about, github);