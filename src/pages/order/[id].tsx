import { useRouter } from 'next/router';

export default function Order() {
    const { query } = useRouter()

    return (
        <div>
            Order: {JSON.stringify(query)}
        </div>
    )
}