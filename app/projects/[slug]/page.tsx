export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Szczegóły projektu: {params.slug}</h1>;
}
