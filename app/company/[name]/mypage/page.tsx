interface IParams {
    params: { name: string };
}

export default function MyPage({ params: { name } }: IParams) {
    return <div>My-Page : {name}</div>;
}
