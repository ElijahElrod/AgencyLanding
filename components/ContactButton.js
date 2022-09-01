import { Button } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function ContactButton() {

    const router = useRouter();

    const redirectToContact = () => {
        router.push('/contact')
    }

    return (
        <Button auto color={"gradient"} onClick={redirectToContact} css={{ paddingTop: 4, marginTop: 4}}>
            Schedule A Call
        </Button>
    )
}