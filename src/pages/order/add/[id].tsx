import { useRouter } from 'next/router';

export default function AddOrder() {
    const { query } = useRouter()

    return (
        <div>
            Add Order: {JSON.stringify(query)}
        </div>
    )
}