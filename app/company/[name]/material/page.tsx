interface IParams {
    params: { name: string };
}

export default function EstimateMaterial({ params: { name } }: IParams) {
    return <div>EstimateMaterial-{name}</div>;
}
