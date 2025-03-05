"use client"; 
import { useParams } from 'next/navigation';

export default function StudioPage() {
  const params = useParams();
  const slug = params?.slug; // `slug` will be an array if dynamic

  if (!slug) {
    return <div>Studio Home</div>;
  }

  if (slug[0] === "index") {
    return <div>Index Page</div>;
  }

  if (slug[0] === "tool") {
    return <div>Tool Page</div>;
  }

  return <div>404 - Page Not Found</div>;
}
