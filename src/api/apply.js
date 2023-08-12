export const addApply = async applyData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/apply`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(applyData),
    })

    const data = await response.json()
    return data
}

