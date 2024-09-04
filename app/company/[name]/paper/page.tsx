interface IParams {
    params: { name: string };
}

export default function EstimatiePaper({ params: { name } }: IParams) {
    console.log(name);
    return <div>EstimatiePaper-{name}</div>;
}
