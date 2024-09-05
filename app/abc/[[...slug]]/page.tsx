interface ISlug {
    params: { slug: string[] };
}

export default function SlugPage({ params }: ISlug) {
    return (
        <div>
            <div>abc-page</div>
            {params.slug?.map((el, i) => <div key={i}>{el}</div>)}
        </div>
    );
}
