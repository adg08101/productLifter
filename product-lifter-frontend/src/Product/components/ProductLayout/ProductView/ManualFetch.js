import { react, useState } from 'react'
import { Section, Button } from 'react-bulma-components'

const ManualFetch = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <Section>
            <Button
                onClick={() => {
                    setIsLoading(!isLoading)
                }}
            >
                {isLoading ? 'do_the_fetch' : 'stop_the_fetch'}
            </Button>
        </Section>
    )
}

export default ManualFetch